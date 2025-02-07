import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  APP_CONSTANTS,
  FORMS_OPTIONS_CONSTANTS,
} from 'src/app/core/_constants';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';
import { FormArray, FormGroup } from '@angular/forms';
import { EDUCATION_DETAILS_FORMS_KEYS } from '../../_classes/create-profile-base-class';
import { EducationDetails } from '../../_models/user-profile.models';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.scss'],
})
export class EducationDetailsComponent {
  public readonly APP_CONSTANTS = APP_CONSTANTS;
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  public readonly FROMS_OPTIONS = FORMS_OPTIONS_CONSTANTS;
  public readonly EDUCATION_DETAILS_FORMS_KEYS = EDUCATION_DETAILS_FORMS_KEYS;

  @Input() public form!: FormGroup;
  @Output() public addEducationDetails = new EventEmitter<EducationDetails>();

  public educationDetailsList: EducationDetails[] = [];

  ngOnInit(): void {}

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
