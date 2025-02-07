import { Component, Input } from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';

@Component({
  selector: 'app-experience-details-list',
  templateUrl: './experience-details-list.component.html',
  styleUrls: ['./experience-details-list.component.scss'],
})
export class ExperienceDetailsListComponent {
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  @Input() public experienceDetailsList: any[] = [];
}
