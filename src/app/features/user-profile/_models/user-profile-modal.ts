import {
  DemographicDetails,
  EducationDetails,
  ExperienceDetails,
  AddressDetails,
} from './user-profile.models';

export class UserProfileModal {
  demographicDetails: DemographicDetails;
  educationDetails: EducationDetails;
  experienceDetails: ExperienceDetails;
  address: AddressDetails;

  constructor(
    demographicDetails: DemographicDetails,
    educationDetails: EducationDetails,
    experienceDetails: ExperienceDetails,
    address: AddressDetails
  ) {
    this.demographicDetails = {
      firstName: demographicDetails.firstName,
      lastName: demographicDetails.lastName,
      email: demographicDetails.email,
      salutation: demographicDetails.salutation,
      gender: demographicDetails.gender,
      interests: demographicDetails.interests,
    };

    this.educationDetails = {
      credential: educationDetails.credential,
      institution: educationDetails.institution,
      degreeCertificate: educationDetails.degreeCertificate,
      state: educationDetails.state,
      city: educationDetails.city,
    };

    this.experienceDetails = {
      employer: experienceDetails.employer,
      role: experienceDetails.role,
      doj: experienceDetails.doj,
      durationInMonths: experienceDetails.durationInMonths,
    };

    this.address = {
      type: address.type,
      country: address.country,
      state: address.state,
      city: address.city,
      street: address.street,
      pincode: address.pincode,
    };
  }
}
