import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  APP_CONSTANTS,
  FORMS_OPTIONS_CONSTANTS,
} from 'src/app/core/_constants';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';
import { Form, FormArray, FormGroup } from '@angular/forms';
import { EDUCATION_DETAILS_FORMS_KEYS } from '../../_classes/create-profile-base-class';
import { EducationDetails } from '../../_models/user-profile.models';
import { MasterData, MasterList } from 'src/app/core/_models/master-list';
import { DropdownService } from 'src/app/core/_services/master-data/dropdown.service';
import { Observable } from 'rxjs';
import { UserProfileModal } from '../../_models/user-profile-modal';
import { state } from '@angular/animations';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.scss'],
})
export class EducationDetailsComponent implements OnInit {
  public readonly APP_CONSTANTS = APP_CONSTANTS;
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  public readonly FROMS_OPTIONS = FORMS_OPTIONS_CONSTANTS;
  public readonly EDUCATION_DETAILS_FORMS_KEYS = EDUCATION_DETAILS_FORMS_KEYS;

  public $stateList!: Observable<MasterList[]>;
  public $cityList!: Observable<MasterList[]>;

  private dropdownService = inject(DropdownService);

  @Input() public form!: FormGroup;
  @Input() public educationDetailsListData!: EducationDetails[]; // Input for education details list data
  @Input() public data$!: Observable<UserProfileModal | null>; // Observable for user profile data
  @Input() public isEditMode: boolean = true; // Default to true for edit mode
  @Input() public isEditEducationDetails: boolean = false;
  @Input() public dropdownData$!: Observable<MasterData>;
  @Output() public addEducationDetails = new EventEmitter<EducationDetails>();

  public educationDetailsList: EducationDetails[] = [];

  ngOnInit(): void {
    if (this.isEditMode) {
      this.toGetState(1); // Initialize with a default state ID, e.g., 1
    }

    if (
      this.isEditEducationDetails &&
      this.educationDetailsListData.length > 0
    ) {
      this.educationDetailsList = this.educationDetailsListData;
    }
  }

  public toGetState(countryId: number): void {
    this.$stateList = this.dropdownService.getStates(countryId);
  }

  public onChangeState(stateId: number): void {
    this.$cityList = this.dropdownService.getCities(1, stateId);
  }

  /**
   * Emits an event to the parent component to add new education details.
   * The parent component will handle the logic to add new education details.
   */
  public addNewEducationDetails(): void {
    const newEducationDetails = { ...this.form.value };
    this.educationDetailsList = [
      ...this.educationDetailsList,
      newEducationDetails,
    ];
    this.addEducationDetails.emit(newEducationDetails);
    this.form.reset();
  }

  public get educationDetailsFormArray(): FormArray {
    return this.form.get('educationDetailsFrom') as FormArray;
  }
}
