export interface DemographicDetails {
  firstName: string;
  lastName: string;
  email: string;
  salutation: string;
  gender: string;
  interests: { interestId: number; value: string }[];
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

// FOR CLIENT SIDE
// This interface is used to represent the user profile details that will be displayed on the client side.
// It includes demographic details, education details, experience details, and address details.
export interface UserProfile {
  userId: number;
  demographicDetails: DemographicDetails;
  educationDetails: EducationDetails[];
  experienceDetails: ExperienceDetails[];
  address: AddressDetails[];
}

// FOR SERVER SIDE
// This interface is used to represent the user profile details that will be sent to the server.
// It includes user ID, first name, last name, email, salutation, gender, and interests.
// It also includes education information, experience information, and address details.
export interface UserProfileDetails {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  salutation: string;
  gender: string;
  interests: { interestId: number; value: string }[];
  educationInformation: EducationInformation[];
  experienceInformation: ExperienceInformation[];
  address: Address[];
}

export interface Address {
  addressId: number;
  type: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  doorNoStreet: string;
}

export interface ExperienceInformation {
  experienceId: number;
  employer: string;
  role: string;
  doj: string | null;
  durationInMonth: number;
}

export interface EducationInformation {
  educationId: number;
  credential: string;
  degreeCertificate: string;
  institution: string;
  educationCity: string;
  educationState: string;
}

export interface UserProfileDetailsResponse {
  message: string;
  id: number;
  operationType: string;
}
