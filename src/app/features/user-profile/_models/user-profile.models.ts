export interface DemographicDetails {
  firstName: string;
  lastName: string;
  email: string;
  salutation: string;
  gender: string;
  interests: string[];
}

export interface EducationDetails {
  educationId: number;
  credential: string;
  institution: string;
  degreeCertificate: string;
  state: string;
  city: string;
}

export interface ExperienceDetails {
  experienceId: number;
  employer: string;
  role: string;
  doj: Date;
  durationInMonths: number;
}

export interface AddressDetails {
  addressId: number;
  type: string;
  country: string;
  state: string;
  city: string;
  street: string;
  pincode: string;
}

export interface UserProfile {
  demographicDetails: DemographicDetails;
  educationDetails: EducationDetails[];
  experienceDetails: ExperienceDetails[];
  address: AddressDetails[];
}

export interface UserProfileDetails {
  FirstName: string;
  LastName: string;
  Email: string;
  Salutation: string;
  Gender: string;
  Interests: string[];
  EducationInformation: EducationInformation[];
  ExperienceInformation: ExperienceInformation[];
  Address: Address[];
}

export interface Address {
  AddressId: number;
  Type: string;
  City: string;
  State: string;
  Country: string;
  Pincode: string;
  DoorNoStreet: string;
}

export interface ExperienceInformation {
  ExperienceId: number;
  Employer: string;
  Role: string;
  DOJ: string | null;
  DurationInMonth: number;
}

export interface EducationInformation {
  EducationId: number;
  Credential: string;
  DegreeCertificate: string;
  Institution: string;
  EducationCity: string;
  EducationState: string;
}

export interface UserProfileDetailsResponse {
  message: string;
  id: number;
  operationType: string;
}
