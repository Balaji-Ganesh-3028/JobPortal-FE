import { Component, OnInit } from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../_constants/user-profile-constants.constants';
import { CreateProfileBaseClass } from '../_classes/create-profile-base-class';
import { UserProfileModal } from '../_models/user-profile-modal';
import { setAdaptors } from '../_helpers/set-adaptors';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent
  extends CreateProfileBaseClass
  implements OnInit
{
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit(); //  Ensures base class initialization runs
  }

  onSave(event: any): void {
    if (event === true) {
      console.log(this.createProfile.value);
      console.log(new UserProfileModal(setAdaptors(this.createProfile.value)));
    }
  }

  isDisableSave(): boolean {
    return (
      this.demogrpahicDetailsForm().valid &&
      this.educationDetailsList.valid &&
      this.experienceDetailsList.valid &&
      this.addressDetailsList.valid
    );
  }
}
