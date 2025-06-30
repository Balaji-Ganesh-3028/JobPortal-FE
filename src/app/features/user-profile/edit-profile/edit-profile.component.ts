import { Component, inject, OnInit } from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../_constants/user-profile-constants.constants';
import {
  CreateProfileBaseClass,
  DEMOGRAPHIC_DETAILS_FORMS_KEYS,
  FORMS_KEYS,
} from '../_classes/create-profile-base-class';
import { Observable } from 'rxjs';
import { MasterData } from 'src/app/core/_models/master-list';
import { DropdownService } from 'src/app/core/_services/master-data/dropdown.service';
import { UserPorfileService } from '../_services/user-porfile.service';
import {
  UserProfileDetails,
  UserProfileDetailsResponse,
} from '../_models/user-profile.models';
import { ActivatedRoute } from '@angular/router';
import { UserProfileModal } from '../_models/user-profile-modal';
import { getAdaptors } from '../_helpers/get-adaptors';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent
  extends CreateProfileBaseClass
  implements OnInit
{
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  private userId: Number = 0;

  private userProfileService = inject(UserPorfileService);
  private activatedRoute = inject(ActivatedRoute);
  public $userProfileData!: Observable<UserProfileDetails>;

  private dropdownService = inject(DropdownService);
  public masterData: Observable<MasterData> =
    this.dropdownService.getDropdownData(); // Adjust type as needed
  public userProfile!: UserProfileModal;

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit(); //  Ensures base class initialization runs
    let id = this.activatedRoute.snapshot.paramMap.get('userId'); // Get userId from route parameters
    this.userId = id ? Number(id) : 0;
    this.loadUserProfileData(); // Load user profile data for editing
  }

  loadUserProfileData(): void {
    this.$userProfileData = this.userProfileService.getUserProfile(this.userId);

    this.$userProfileData.subscribe((data) => {
      this.userProfile = new UserProfileModal(getAdaptors(data));

      this.patchValue(this.userProfile);
    });
  }
}
