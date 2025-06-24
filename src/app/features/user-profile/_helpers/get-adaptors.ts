import {
  UserProfile,
  UserProfileDetails,
} from '../_models/user-profile.models';

export function getAdaptors(profile: UserProfileDetails): UserProfile {
  return {
    userId: profile.userId,
    demographicDetails: {
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      salutation: profile.salutation,
      gender: profile.gender,
      interests: profile.interests,
    },
    educationDetails: profile.educationInformation.map((ed) => ({
      educationId: ed.educationId,
      credential: ed.credential,
      institution: ed.institution,
      degreeCertificate: ed.degreeCertificate,
      state: ed.educationState,
      city: ed.educationCity,
    })),
    experienceDetails: profile.experienceInformation.map((ex) => ({
      experienceId: ex.experienceId,
      employer: ex.employer,
      role: ex.role,
      doj: ex.doj ? new Date(ex.doj) : new Date(),
      durationInMonths: ex.durationInMonth,
    })),
    address: profile.address.map((address) => ({
      addressId: address.addressId,
      type: address.type,
      country: address.country,
      state: address.state,
      city: address.city,
      street: address.doorNoStreet,
      pincode: address.pincode,
    })),
  };
}
