import { Component, inject, OnInit } from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../_constants/user-profile-constants.constants';
import { UserProfileModal } from '../_models/user-profile-modal';
import { UserPorfileService } from '../_services/user-porfile.service';
import { UserProfileDetails } from '../_models/user-profile.models';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-view-all-profile',
  templateUrl: './view-all-profile.component.html',
  styleUrls: ['./view-all-profile.component.scss'],
})
export class ViewAllProfileComponent implements OnInit {
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;

  private userProfileService = inject(UserPorfileService);

  private profileDataSubject = new BehaviorSubject<UserProfileDetails[]>([]);
  public $profileData = this.profileDataSubject.asObservable();

  constructor() {}

  ngOnInit(): void {
    this.loadProfiles();
  }

  public deleteUserProfile(userId: number): void {
    this.userProfileService.deleteUserProfile(userId).subscribe({
      next: () => {
        this.loadProfiles();
      },
      error: (error) => {
        console.error('Error deleting profile:', error);
      },
    });
  }

  private loadProfiles(): void {
    this.userProfileService.getAllUserProfiles().subscribe({
      next: (profiles) => this.profileDataSubject.next(profiles),
      error: (err) => console.error('Failed to load profiles', err),
    });
  }
}
