import {
  DemographicDetails,
  EducationDetails,
  ExperienceDetails,
  AddressDetails,
  UserProfile,
} from './user-profile.models';

export class UserProfileModal {
  userId: number;
  demographicDetails: DemographicDetails;
  educationDetails: EducationDetails[];
  experienceDetails: ExperienceDetails[];
  address: AddressDetails[];

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Constructor to create a new instance of UserProfileModal.
   * @param userProfile An object of type UserProfile that needs to be mapped to UserProfileModal.
   * @description This constructor destructures the userProfile object to extract the properties,
   * maps the values to the class properties, and assigns the default values if some properties
   * are missing.
   */
  /*******  92804ae3-58a0-4a9a-8237-91693f8538b9  *******/
  constructor(userProfile: UserProfile) {
    const {
      userId,
      demographicDetails,
      educationDetails,
      experienceDetails,
      address,
    } = userProfile;

    // Destructure the userProfile object to extract the properties
    // Assign the values to the class properties
    this.userId = userId || 0; // Default to 0 if id is not provided
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
