import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  APP_CONSTANTS,
  FORMS_OPTIONS_CONSTANTS,
} from 'src/app/core/_constants';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';
import { FormGroup } from '@angular/forms';
import { EXPERIENCE_DETAILS_FORMS_KEYS } from '../../_classes/create-profile-base-class';
import { ExperienceDetails } from '../../_models/user-profile.models';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss'],
})
export class ExperienceDetailsComponent {
  public readonly APP_CONSTANTS = APP_CONSTANTS;
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  public readonly FROMS_OPTIONS = FORMS_OPTIONS_CONSTANTS;
  public readonly EXPERIENCE_DETAILS_FORMS_KEYS = EXPERIENCE_DETAILS_FORMS_KEYS;

  @Input() public form!: FormGroup;
  @Output() public addExperienceDetails = new EventEmitter<ExperienceDetails>();

  public experienceDetailsList: ExperienceDetails[] = [];

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
