import { Component, inject, OnInit } from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../_constants/user-profile-constants.constants';
import { CreateProfileBaseClass } from '../_classes/create-profile-base-class';
import { UserProfileModal } from '../_models/user-profile-modal';
import { responseAdaptor, setAdaptors } from '../_helpers/set-adaptors';
import { UserPorfileService } from '../_services/user-porfile.service';
import { DropdownService } from 'src/app/core/_services/master-data/dropdown.service';
import { MasterData } from 'src/app/core/_models/master-list';

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
  private userProfileService = inject(UserPorfileService);
  private dropdownService = inject(DropdownService);

  public masterData!: MasterData; // Adjust type as needed

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit(); //  Ensures base class initialization runs

    this.loadMasterData();
  }

  private loadMasterData(): void {
    this.dropdownService.getDropdownData().subscribe({
      next: (data) => {
        this.masterData = data;
        console.log('Master data loaded:', this.masterData);
      },
      error: (error) => {
        console.error('Error loading master data:', error);
      },
    });
  }

  onSave(event: any): void {
    if (event === true) {
      console.log(this.createProfile.value);
      console.log(new UserProfileModal(setAdaptors(this.createProfile.value)));
      const response = new UserProfileModal(
        setAdaptors(this.createProfile.value)
      );
      // Call the service to save the user profile
      this.userProfileService
        .createUserProfie(responseAdaptor(response))
        .subscribe({
          next: (response) => {
            console.log('User profile created successfully:', response);
            // Handle success response
          },
          error: (error) => {
            console.error('Error creating user profile:', error);
            // Handle error response
          },
          complete: () => {
            // Handle completion (optional)
          },
        });
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
