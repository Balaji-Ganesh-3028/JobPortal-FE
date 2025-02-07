import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  APP_CONSTANTS,
  FORMS_OPTIONS_CONSTANTS,
} from 'src/app/core/_constants';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';
import { FormGroup } from '@angular/forms';
import { Address } from '../../_models/user-profile.models';
import { ADDRESS_FORMS_KEYS } from '../../_classes/create-profile-base-class';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
  public readonly APP_CONSTANTS = APP_CONSTANTS;
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  public readonly FROMS_OPTIONS = FORMS_OPTIONS_CONSTANTS;
  public readonly ADDRESS_FORMS_KEYS = ADDRESS_FORMS_KEYS;

  @Input() public form!: FormGroup;
  @Output() public addAddress = new EventEmitter<Address>();

  public addressList: any[] = [];

  constructor() {}

  /**
   * Emits an event to the parent component to add new address.
   * The parent component will handle the logic to add new address.
   */
  public addNewAddress(): void {
    const newAddress = { ...this.form.value };
    this.addressList = [...this.addressList, newAddress];
    this.addAddress.emit(newAddress);
    this.form.reset();
  }
}
