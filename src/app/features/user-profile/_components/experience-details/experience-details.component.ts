import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  APP_CONSTANTS,
  FORMS_OPTIONS_CONSTANTS,
} from 'src/app/core/_constants';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';
import { FormGroup } from '@angular/forms';
import { EXPERIENCE_DETAILS_FORMS_KEYS } from '../../_classes/create-profile-base-class';
import { ExperienceDetails } from '../../_models/user-profile.models';
import { MasterData } from 'src/app/core/_models/master-list';
import { Observable } from 'rxjs';
import { UserProfileModal } from '../../_models/user-profile-modal';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss'],
})
export class ExperienceDetailsComponent implements OnInit {
  public readonly APP_CONSTANTS = APP_CONSTANTS;
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  public readonly FROMS_OPTIONS = FORMS_OPTIONS_CONSTANTS;
  public readonly EXPERIENCE_DETAILS_FORMS_KEYS = EXPERIENCE_DETAILS_FORMS_KEYS;

  @Input() public form!: FormGroup;
  @Input() public data$!: Observable<UserProfileModal>; // Observable for user profile data
  @Input() public isEditMode: boolean = true; // Default to true for edit mode
  @Input() public isEditExperienceDetails: boolean = false;
  @Input() public experienceDetailsListData!: ExperienceDetails[]; // Input for education details list data
  @Output() public addExperienceDetails = new EventEmitter<ExperienceDetails>();

  public experienceDetailsList: ExperienceDetails[] = [];

  constructor() {}

  ngOnInit(): void {
    if (
      this.isEditExperienceDetails &&
      this.experienceDetailsListData.length > 0
    ) {
      this.experienceDetailsList = this.experienceDetailsListData;
    }
  }

  public addNewExperienceDetails() {
    const newEducationDetails = { ...this.form.value };
    this.experienceDetailsList = [
      ...this.experienceDetailsList,
      newEducationDetails,
    ];
    this.addExperienceDetails.emit(newEducationDetails);
    this.form.reset();
  }
}
