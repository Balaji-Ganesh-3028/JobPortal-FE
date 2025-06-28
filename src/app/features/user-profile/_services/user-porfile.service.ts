import { inject, Injectable } from '@angular/core';
import { UserProfileModal } from '../_models/user-profile-modal';
import { HttpBaseService } from 'src/app/core/_services/http-base/http-base.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { PROFILE_API_URL } from '../_constants/api-constants.constants';
import {
  UserProfile,
  UserProfileDetails,
  UserProfileDetailsResponse,
} from '../_models/user-profile.models';

@Injectable({
  providedIn: 'root',
})
export class UserPorfileService {
  private httpService = inject(HttpBaseService);
  constructor() {}

  public createUserProfie(
    userProfile: UserProfileDetails
  ): Observable<UserProfileDetailsResponse> {
    // This is a mock API endpoint. In a real application, you would replace this with your actual API endpoint.
    // The API endpoint should be defined in a configuration file or environment variable.
    return this.httpService.post<
      UserProfileDetailsResponse,
      UserProfileDetails
    >(
      `${environment.apiBaseUrl}${PROFILE_API_URL.CREATE_PROFILE}`,
      userProfile
    );
  }

  public getUserProfile(userId: number): Observable<UserProfileDetails> {
    return this.httpService.get<UserProfileDetails>(
      `${environment.apiBaseUrl}${PROFILE_API_URL.GET_PROFILE}${userId}`
    );
  }

  public getAllUserProfiles(): Observable<UserProfileDetails[]> {
    return this.httpService.get<UserProfileDetails[]>(
      `${environment.apiBaseUrl}${PROFILE_API_URL.GET_ALL_PROFILES}`
    );
  }

  public deleteUserProfile(
    userId: number
  ): Observable<UserProfileDetailsResponse> {
    return this.httpService.delete<UserProfileDetailsResponse>(
      `${environment.apiBaseUrl}${PROFILE_API_URL.DELETE_PROFILE}${userId}`
    );
  }
}
