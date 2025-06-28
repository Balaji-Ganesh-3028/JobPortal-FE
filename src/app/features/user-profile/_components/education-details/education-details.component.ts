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
import { FormArray, FormGroup } from '@angular/forms';
import { EDUCATION_DETAILS_FORMS_KEYS } from '../../_classes/create-profile-base-class';
import { EducationDetails } from '../../_models/user-profile.models';
import { MasterData } from 'src/app/core/_models/master-list';
import { DropdownService } from 'src/app/core/_services/master-data/dropdown.service';
import { Observable } from 'rxjs';
import { UserProfileModal } from '../../_models/user-profile-modal';

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
  public _dropdownData!: MasterData; // Adjust type as needed
  private dropdownService = inject(DropdownService);

  @Input() public form!: FormGroup;
  @Input() public data$!: Observable<UserProfileModal | null>; // Observable for user profile data
  @Input() public isEditMode: boolean = true; // Default to true for edit mode
  @Input() public dropdownData$!: Observable<MasterData>;
  @Output() public addEducationDetails = new EventEmitter<EducationDetails>();

  public educationDetailsList: EducationDetails[] = [];

  ngOnInit(): void {
    if (this.isEditMode) {
      this.toGetState(1); // Initialize with a default state ID, e.g., 1
    }
  }

  get dropdownData(): MasterData {
    return this._dropdownData;
  }

  public toGetState(countryId: number): void {
    this.dropdownService.getStates(countryId).subscribe({
      next: (states) => {
        this._dropdownData.state = states; // Update states in dropdown data
      },
      error: (error) => {
        console.error('Error fetching states:', error);
      },
    });
  }

  public onChangeState(stateId: number): void {
    this.dropdownService.getCities(1, stateId).subscribe({
      next: (cities) => {
        this._dropdownData.city = cities; // Update cities in dropdown data
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      },
    });
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
