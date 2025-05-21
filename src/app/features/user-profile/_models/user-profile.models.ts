export interface DemographicDetails {
  firstName: string;
  lastName: string;
  email: string;
  salutation: string;
  gender: string;
  interests: string[];
}

export interface EducationDetails {
  credential: string;
  institution: string;
  degreeCertificate: string;
  state: string;
  city: string;
}

export interface ExperienceDetails {
  employer: string;
  role: string;
  doj: Date;
  durationInMonths: string;
}

export interface AddressDetails {
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
