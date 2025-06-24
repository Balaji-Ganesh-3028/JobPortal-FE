import { Component, inject, OnInit } from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../_constants/user-profile-constants.constants';
import { UserProfileModal } from '../_models/user-profile-modal';
import { UserPorfileService } from '../_services/user-porfile.service';
import { UserProfileDetails } from '../_models/user-profile.models';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-all-profile',
  templateUrl: './view-all-profile.component.html',
  styleUrls: ['./view-all-profile.component.scss'],
})
export class ViewAllProfileComponent implements OnInit {
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  // private userProfileService = inject(UserPorfileService);
  public $profileData: Observable<UserProfileDetails[]> =
    this.userProfileService.getAllUserProfiles();

  constructor(
    private activatedRoute: ActivatedRoute,
    private userProfileService: UserPorfileService
  ) {}

  ngOnInit(): void {}
}
