import { Component, Input } from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent {
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  @Input() public addressList: any[] = [];
}
