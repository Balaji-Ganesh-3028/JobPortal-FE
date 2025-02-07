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

export interface Address {
  type: string;
  country: string;
  state: string;
  city: string;
  street: string;
  pincode: string;
}
