import { Component, inject, OnInit } from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../_constants/user-profile-constants.constants';
import { UserPorfileService } from '../_services/user-porfile.service';
import { UserProfileModal } from '../_models/user-profile-modal';
import { getAdaptors } from '../_helpers/get-adaptors';
import { catchError, map, Observable, of, shareReplay } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  public $profileData!: Observable<UserProfileModal>;

  constructor(
    private userProfileService: UserPorfileService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Fetch user profile data for userId from the activated route or a hardcoded value
    let userId = this.activatedRoute.snapshot.paramMap.get('userId'); // Default to 11 if not found

    this.$profileData = this.userProfileService
      .getUserProfile(Number(userId))
      .pipe(
        map((profile) => new UserProfileModal(getAdaptors(profile))),
        catchError((error) => {
          console.error('Error fetching user profile:', error);
          return of();
        }),
        shareReplay({ bufferSize: 1, refCount: true }) // Cache the result for subsequent subscribers and auto-unsubscribe
      );
  }
}
