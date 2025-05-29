import { Component, Input } from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';
import {
  APP_CONSTANTS,
  FORMS_OPTIONS_CONSTANTS,
} from 'src/app/core/_constants';
import { FormGroup } from '@angular/forms';
import { DEMOGRAPHIC_DETAILS_FORMS_KEYS } from '../../_classes/create-profile-base-class';
import { MasterData } from 'src/app/core/_models/master-list';

@Component({
  selector: 'app-demographic-details',
  templateUrl: './demographic-details.component.html',
  styleUrls: ['./demographic-details.component.scss'],
})
export class DemographicDetailsComponent {
  public readonly APP_CONSTANTS = APP_CONSTANTS;
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  public readonly FROMS_OPTIONS = FORMS_OPTIONS_CONSTANTS;
  public readonly DEMOGRAPHIC_DETAILS_FORMS_KEYS =
    DEMOGRAPHIC_DETAILS_FORMS_KEYS;
  public _dropdownData!: MasterData; // Adjust type as needed

  @Input() public form!: FormGroup;
  @Input() public set dropdownData(data: MasterData) {
    if (data) {
      this._dropdownData = data;
      console.log('Dropdown data set:', this._dropdownData);
    }
  } // Adjust type as needed

  ngOnInit() {
    console.log('DemographicDetailsComponent initialized', this._dropdownData);
  }

  get dropdownData(): MasterData {
    return this._dropdownData;
  }
}
