import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  APP_CONSTANTS,
  FORMS_OPTIONS_CONSTANTS,
} from 'src/app/core/_constants';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';
import { FormGroup } from '@angular/forms';
import { Address, AddressDetails } from '../../_models/user-profile.models';
import { ADDRESS_FORMS_KEYS } from '../../_classes/create-profile-base-class';
import { MasterData, MasterList } from 'src/app/core/_models/master-list';
import { DropdownService } from 'src/app/core/_services/master-data/dropdown.service';
import { Observable } from 'rxjs';
import { UserProfileModal } from '../../_models/user-profile-modal';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
  public readonly APP_CONSTANTS = APP_CONSTANTS;
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  public readonly ADDRESS_FORMS_KEYS = ADDRESS_FORMS_KEYS;

  public selectdCountryId: number = 0;
  public $stateList!: Observable<MasterList[]>;
  public $cityList!: Observable<MasterList[]>;

  private dropdownService = inject(DropdownService);

  @Input() public form!: FormGroup;
  @Input() public data$!: Observable<UserProfileModal | null>; // Observable for user profile data
  @Input() public isEditMode: boolean = true; // Default to true for edit mode
  @Input() public $dropdownData!: Observable<MasterData>; // Observable for dropdownData

  @Input() public isEditAddressDetails: boolean = false;
  @Input() public addressListData!: Address[]; // Input for education details list data
  @Output() public addAddress = new EventEmitter<AddressDetails>();

  public addressList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.isEditAddressDetails && this.addressListData.length > 0) {
      this.addressList = this.addressListData;
    }
  }

  public onChangeCountry(countryId: number): void {
    // Need to clear the state and city lists when country changes
    this.$cityList = new Observable<MasterList[]>(); // Clear city list
    this.$stateList = this.dropdownService.getStates(countryId);
    this.selectdCountryId = countryId;
  }

  public onChangeState(stateId: number): void {
    this.$cityList = this.dropdownService.getCities(
      this.selectdCountryId,
      stateId
    );
  }

  /*public onChangeCountry(event: number): void {
    this.dropdownService.getStates(event).subscribe({
      next: (states) => {},
      error: (error) => {
        console.error('Error fetching states:', error);
      },
    });
  }*/

  /*public onChangeState(stateId: number): void {
    const selectedCountry = this.form.get(ADDRESS_FORMS_KEYS.COUNTRY)?.value; // Get the selected country ID

    // const countryId = this._dropdownData.country.find(
    //   (country) => country.value === selectedCountry
    // )?.id; // Get the country ID from the dropdown data

    this.dropdownService.getCities(1, stateId).subscribe({
      next: (cities) => {},
      error: (error) => {
        console.error('Error fetching cities:', error);
      },
    });
  }*/

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
