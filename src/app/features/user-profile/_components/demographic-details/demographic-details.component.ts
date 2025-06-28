import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';
import {
  APP_CONSTANTS,
  FORMS_OPTIONS_CONSTANTS,
} from 'src/app/core/_constants';
import { FormGroup } from '@angular/forms';
import { DEMOGRAPHIC_DETAILS_FORMS_KEYS } from '../../_classes/create-profile-base-class';
import { MasterData } from 'src/app/core/_models/master-list';
import { UserProfileModal } from '../../_models/user-profile-modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demographic-details',
  templateUrl: './demographic-details.component.html',
  styleUrls: ['./demographic-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemographicDetailsComponent implements OnInit {
  public readonly APP_CONSTANTS = APP_CONSTANTS;
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  public readonly FROMS_OPTIONS = FORMS_OPTIONS_CONSTANTS;
  public readonly DEMOGRAPHIC_DETAILS_FORMS_KEYS =
    DEMOGRAPHIC_DETAILS_FORMS_KEYS;

  @Input() public form!: FormGroup;
  @Input() public data$!: Observable<UserProfileModal>; // Observable for user profile data
  @Input() public isEditMode: boolean = true; // Default to true for edit mode
  @Input() public dropdownData$!: Observable<MasterData>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  /**
   * Returns a comma-separated string of the user's interests, or '-' if there are none.
   * @returns A comma-separated string of the user's interests.
   */
  getInterestsDisplay(interests: { value: string }[]): string {
    if (Array.isArray(interests) && interests.length > 0) {
      return interests.map((i) => i.value).join(', ');
    }
    return '-';
  }
}
