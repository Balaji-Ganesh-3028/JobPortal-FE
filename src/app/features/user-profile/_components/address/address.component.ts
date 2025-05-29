import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  APP_CONSTANTS,
  FORMS_OPTIONS_CONSTANTS,
} from 'src/app/core/_constants';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';
import { FormGroup } from '@angular/forms';
import { AddressDetails } from '../../_models/user-profile.models';
import { ADDRESS_FORMS_KEYS } from '../../_classes/create-profile-base-class';
import { MasterData } from 'src/app/core/_models/master-list';
import { DropdownService } from 'src/app/core/_services/master-data/dropdown.service';

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
  public _dropdownData!: MasterData; // Adjust type as needed
  private dropdownService = inject(DropdownService);

  @Input() public form!: FormGroup;
  @Input() public set dropdownData(data: MasterData) {
    if (data) {
      this._dropdownData = data;
      console.log('Dropdown data set:', this._dropdownData);
    }
  } // Adjust type as needed

  @Output() public addAddress = new EventEmitter<AddressDetails>();

  public addressList: any[] = [];

  constructor() {}

  get dropdownData(): MasterData {
    return this._dropdownData;
  }

  public onChangeCountry(event: number): void {
    this.dropdownService.getStates(event).subscribe({
      next: (states) => {
        this._dropdownData.state = states; // Update states in dropdown data
      },
      error: (error) => {
        console.error('Error fetching states:', error);
      },
    });
  }

  public onChangeState(stateId: number): void {
    const selectedCountry = this.form.get(ADDRESS_FORMS_KEYS.COUNTRY)?.value; // Get the selected country ID

    const countryId = this._dropdownData.country.find(
      (country) => country.name === selectedCountry
    )?.id; // Get the country ID from the dropdown data

    if (!countryId) {
      alert('Country ID is not selected');
      return;
    }

    this.dropdownService.getCities(countryId, stateId).subscribe({
      next: (cities) => {
        this._dropdownData.city = cities; // Update cities in dropdown data
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      },
    });
  }

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
