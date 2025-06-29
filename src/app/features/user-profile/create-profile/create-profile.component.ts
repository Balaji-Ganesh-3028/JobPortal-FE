import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../_constants/user-profile-constants.constants';
import { CreateProfileBaseClass } from '../_classes/create-profile-base-class';
import { UserProfileModal } from '../_models/user-profile-modal';
import { responseAdaptor, setAdaptors } from '../_helpers/set-adaptors';
import { UserPorfileService } from '../_services/user-porfile.service';
import { DropdownService } from 'src/app/core/_services/master-data/dropdown.service';
import { MasterData } from 'src/app/core/_models/master-list';
import { SnackbarService } from 'src/app/shared/_services/toast-message/snackbar.service';
import { MatSpinnerService } from 'src/app/shared/_services/loader/mat-spinner.service';
import { Observable } from 'rxjs';

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

  public masterData: Observable<MasterData> =
    this.dropdownService.getDropdownData(); // Adjust type as needed

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit(); //  Ensures base class initialization runs
  }

  onSave(event: any): void {
    if (event === true) {
      const response = new UserProfileModal(
        setAdaptors(this.createProfile.value, [])
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
