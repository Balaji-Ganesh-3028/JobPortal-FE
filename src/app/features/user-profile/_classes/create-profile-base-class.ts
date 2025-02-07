import { Injectable, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EducationDetails } from '../_models/user-profile.models';

export const FORMS_KEYS = {
  DEMOGRAPHIC_DETAILS: 'demographicDetailsFrom',
  ADDRESS: 'addressFrom',
  ADDRESS_LIST: 'addressFromList',
  EDUCATION_DETAILS: 'educationDetailsFrom',
  EDUCATION_LIST: 'educationDetailsList',
  EXPERIENCE_DETAILS: 'experienceDetailsFrom',
  EXPERIENCE_DETAILS_LIST: 'experienceDetailsList',
} as const;

export const DEMOGRAPHIC_DETAILS_FORMS_KEYS = {
  FIRSTNAME: 'firstName',
  LASTNAME: 'lastName',
  EMAIL: 'email',
  GENDER: 'gender',
  SALUTATION: 'salutation',
  INTERESTS: 'interests',
} as const;

export const EDUCATION_DETAILS_FORMS_KEYS = {
  DEGREE_CERTIFICATE: 'degreeCertificate',
  INSTITUTION: 'institution',
  STATE: 'state',
  CITY: 'city',
  CREDENTIAL: 'credential',
} as const;

export const EXPERIENCE_DETAILS_FORMS_KEYS = {
  EMPLOYER: 'employer',
  DOJ: 'doj',
  ROLE: 'role',
  DURATION_IN_MONTHS: 'durationInMonths',
} as const;

export const ADDRESS_FORMS_KEYS = {
  TYPE: 'type',
  COUNTRY: 'country',
  STATE: 'state',
  CITY: 'city',
  DOOR_NO_AND_STREET: 'doorNoAndStreet',
  PINCODE: 'pincode',
} as const;

@Injectable()
export class CreateProfileBaseClass implements OnInit {
  public createProfile!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  /**
   * Initializes the createProfile FormGroup with various form controls and form arrays.
   * - DEMOGRAPHIC_DETAILS: A form group for capturing demographic details.
   * - ADDRESS_DETAILS: An empty form array for address details.
   * - EDUCATION_DETAILS: A form group for capturing education details.
   * - EDUCATION_LIST: An empty form array for education details list.
   * - EXPERIENCE_DETAILS: An empty form array for experience details.
   */

  public initForm() {
    this.createProfile = new FormGroup({
      [FORMS_KEYS.DEMOGRAPHIC_DETAILS]: this.createDemographicDetailsForm(),
      [FORMS_KEYS.ADDRESS]: this.createAddressForm(),
      [FORMS_KEYS.ADDRESS_LIST]: new FormArray([]),
      [FORMS_KEYS.EDUCATION_DETAILS]: this.createEducationDetailsForm(),
      [FORMS_KEYS.EDUCATION_LIST]: new FormArray([]),
      [FORMS_KEYS.EXPERIENCE_DETAILS_LIST]: new FormArray([]),
      [FORMS_KEYS.EXPERIENCE_DETAILS]: this.createExperienceDetailsForm(),
    });
  }

  /**
   * Create a form group for demographic details.
   * @returns A form group with first name, last name, email, gender, salutation, and interests.
   */
  private createDemographicDetailsForm() {
    return new FormGroup({
      [DEMOGRAPHIC_DETAILS_FORMS_KEYS.FIRSTNAME]: new FormControl('', [
        Validators.required,
      ]),
      [DEMOGRAPHIC_DETAILS_FORMS_KEYS.LASTNAME]: new FormControl('', [
        Validators.required,
      ]),
      [DEMOGRAPHIC_DETAILS_FORMS_KEYS.EMAIL]: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      [DEMOGRAPHIC_DETAILS_FORMS_KEYS.GENDER]: new FormControl('', [
        Validators.required,
      ]),
      [DEMOGRAPHIC_DETAILS_FORMS_KEYS.SALUTATION]: new FormControl('', [
        Validators.required,
      ]),
      [DEMOGRAPHIC_DETAILS_FORMS_KEYS.INTERESTS]: new FormControl(
        [],
        [Validators.required]
      ),
    });
  }

  /**
   * Creates a form group for address details.
   * The form group contains controls for type, country, state, city, street, and pincode,
   * all of which are required fields.
   * @returns A form group configured with controls for address details.
   */
  private createAddressForm() {
    return new FormGroup({
      [ADDRESS_FORMS_KEYS.TYPE]: new FormControl('', [Validators.required]),
      [ADDRESS_FORMS_KEYS.COUNTRY]: new FormControl('', [Validators.required]),
      [ADDRESS_FORMS_KEYS.STATE]: new FormControl('', [Validators.required]),
      [ADDRESS_FORMS_KEYS.CITY]: new FormControl('', [Validators.required]),
      [ADDRESS_FORMS_KEYS.DOOR_NO_AND_STREET]: new FormControl('', [
        Validators.required,
      ]),
      [ADDRESS_FORMS_KEYS.PINCODE]: new FormControl('', [Validators.required]),
    });
  }

  /**
   * Creates a form group for education details.
   * The form group contains controls for credential, degree/certificate,
   * institution, state, and city, all of which are required fields.
   * @returns {FormGroup} A form group configured with controls for
   * education details.
   */
  private createEducationDetailsForm() {
    return new FormGroup({
      [EDUCATION_DETAILS_FORMS_KEYS.CREDENTIAL]: new FormControl('', [
        Validators.required,
      ]),
      [EDUCATION_DETAILS_FORMS_KEYS.DEGREE_CERTIFICATE]: new FormControl('', [
        Validators.required,
      ]),
      [EDUCATION_DETAILS_FORMS_KEYS.INSTITUTION]: new FormControl('', [
        Validators.required,
      ]),
      [EDUCATION_DETAILS_FORMS_KEYS.STATE]: new FormControl('', [
        Validators.required,
      ]),
      [EDUCATION_DETAILS_FORMS_KEYS.CITY]: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  /**
   * Creates a form group for experience details.
   * The form group contains controls for employer, date of joining (doj),
   * role, and duration in months, all of which are required fields.
   * @returns {FormGroup} A form group configured with controls for
   * experience details.
   */
  private createExperienceDetailsForm() {
    return new FormGroup({
      [EXPERIENCE_DETAILS_FORMS_KEYS.EMPLOYER]: new FormControl('', [
        Validators.required,
      ]),
      [EXPERIENCE_DETAILS_FORMS_KEYS.DOJ]: new FormControl('', [
        Validators.required,
      ]),
      [EXPERIENCE_DETAILS_FORMS_KEYS.ROLE]: new FormControl('', [
        Validators.required,
      ]),
      [EXPERIENCE_DETAILS_FORMS_KEYS.DURATION_IN_MONTHS]: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  /**
   * Gets the demographic details form group from the create profile form.
   * @returns {FormGroup} The demographic details form group.
   */
  public demogrpahicDetailsForm(): FormGroup {
    return this.createProfile?.get(FORMS_KEYS.DEMOGRAPHIC_DETAILS) as FormGroup;
  }

  /**
   * Gets the address form group from the create profile form.
   * @returns {FormGroup} The address form group.
   */
  public addressForm(): FormGroup {
    return this.createProfile.get(FORMS_KEYS.ADDRESS) as FormGroup;
  }

  /**
   * Gets the education details form group from the create profile form.
   * @returns {FormGroup} The education details form group.
   */
  public educationDetailsForm(): FormGroup {
    return this.createProfile.get(FORMS_KEYS.EDUCATION_DETAILS) as FormGroup;
  }

  /**
   * Gets the experience details form group from the create profile form.
   * @returns {FormGroup} The experience details form group.
   */
  public experienceDetailsForm(): FormGroup {
    return this.createProfile.get(FORMS_KEYS.EXPERIENCE_DETAILS) as FormGroup;
  }

  /**
   * Gets the education details list form array from the create profile form.
   * @returns {FormArray} The education details list form array.
   */
  get educationDetailsList() {
    return this.createProfile.get(FORMS_KEYS.EDUCATION_LIST) as FormArray;
  }

  /**
   * Gets the experience details list form array from the create profile form.
   * @returns {FormArray} The experience details list form array.
   */
  public get experienceDetailsList(): FormArray {
    return this.createProfile.get(
      FORMS_KEYS.EXPERIENCE_DETAILS_LIST
    ) as FormArray;
  }

  /**
   * Gets the address details list form array from the create profile form.
   * @returns {FormArray} The address details list form array.
   */
  public get addressDetailsList(): FormArray {
    return this.createProfile.get(FORMS_KEYS.ADDRESS_LIST) as FormArray;
  }

  /**
   * Handles the event of adding new education details by adding a new form group
   * to the education details list if the event is valid.
   * @param event The event containing new education details.
   */
  public onAddEducationDetails(event: EducationDetails): void {
    if (event) {
      const educationDetailsForm = this.createEducationDetailsForm(); // CREATE A NEW FORM GROUP
      educationDetailsForm.patchValue(event); // PATCH VALUE
      this.educationDetailsList.push(educationDetailsForm); // PUSH THE FORM GROUP TO THE FORM ARRAY
    }
  }

  /**
   * Handles the event of adding new experience details by adding a new form group
   * to the experience details list if the event is valid.
   * @param event The event containing new experience details.
   */
  public onAddExperienceDetails(event: any): void {
    if (event) {
      const experienceDetailsForm = this.createExperienceDetailsForm(); // CREATE A NEW FORM GROUP
      experienceDetailsForm.patchValue(event); // PATCH VALUE
      this.experienceDetailsList.push(experienceDetailsForm); // PUSH THE FORM GROUP TO THE FORM ARRAY
    }
  }

  /**
   * Handles the event of adding new address details by adding a new form group
   * to the address details list if the event is valid.
   * @param event The event containing new address details.
   */
  public onAddAddress(event: any): void {
    if (event) {
      const addressDetailsForm = this.createAddressForm(); // CREATE A NEW FORM GROUP
      addressDetailsForm.patchValue(event); // PATCH VALUE
      this.addressDetailsList.push(addressDetailsForm); // PUSH THE FORM GROUP TO THE FORM ARRAY
    }
  }
}
