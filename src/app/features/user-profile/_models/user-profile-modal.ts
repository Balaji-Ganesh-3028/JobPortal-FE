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

    // Destructure the userProfile object to extract the properties
    // Assign the values to the class properties
    this.demographicDetails = {
      firstName: demographicDetails.firstName,
      lastName: demographicDetails.lastName,
      email: demographicDetails.email,
      salutation: demographicDetails.salutation,
      gender: demographicDetails.gender,
      interests: demographicDetails.interests,
    };

    this.educationDetails = educationDetails.map((ed) => ({
      educationId: ed.educationId,
      credential: ed.credential,
      institution: ed.institution,
      degreeCertificate: ed.degreeCertificate,
      state: ed.state,
      city: ed.city,
    }));

    this.experienceDetails = experienceDetails.map((ex) => ({
      experienceId: ex.experienceId,
      employer: ex.employer,
      role: ex.role,
      doj: ex.doj,
      durationInMonths: ex.durationInMonths,
    }));

    this.address = address.map((address) => ({
      addressId: address.addressId,
      type: address.type,
      country: address.country,
      state: address.state,
      city: address.city,
      street: address.street,
      pincode: address.pincode,
    }));
  }
}
