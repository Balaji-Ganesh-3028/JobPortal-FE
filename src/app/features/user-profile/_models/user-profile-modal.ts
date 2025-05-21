import {
  DemographicDetails,
  EducationDetails,
  ExperienceDetails,
  AddressDetails,
  UserProfile,
} from './user-profile.models';

export class UserProfileModal {
  demographicDetails: DemographicDetails;
  educationDetails: EducationDetails[];
  experienceDetails: ExperienceDetails[];
  address: AddressDetails[];

  constructor(userProfile: UserProfile) {
    const { demographicDetails, educationDetails, experienceDetails, address } =
      userProfile;

    this.demographicDetails = {
      firstName: demographicDetails.firstName,
      lastName: demographicDetails.lastName,
      email: demographicDetails.email,
      salutation: demographicDetails.salutation,
      gender: demographicDetails.gender,
      interests: demographicDetails.interests,
    };

    this.educationDetails = educationDetails.map((ed) => ({
      credential: ed.credential,
      institution: ed.institution,
      degreeCertificate: ed.degreeCertificate,
      state: ed.state,
      city: ed.city,
    }));

    this.experienceDetails = experienceDetails.map((ex) => ({
      employer: ex.employer,
      role: ex.role,
      doj: ex.doj,
      durationInMonths: ex.durationInMonths,
    }));

    this.address = address.map((address) => ({
      type: address.type,
      country: address.country,
      state: address.state,
      city: address.city,
      street: address.street,
      pincode: address.pincode,
    }));
  }
}
