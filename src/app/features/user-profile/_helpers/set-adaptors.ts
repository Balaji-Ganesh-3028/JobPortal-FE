import { formatDate } from 'src/app/shared/_helpers/format-date';
import {
  ADDRESS_FORMS_KEYS,
  DEMOGRAPHIC_DETAILS_FORMS_KEYS,
  EDUCATION_DETAILS_FORMS_KEYS,
  EXPERIENCE_DETAILS_FORMS_KEYS,
  FORMS_KEYS,
} from '../_classes/create-profile-base-class';
import {
  EducationDetails,
  UserProfile,
  UserProfileDetails,
} from '../_models/user-profile.models';

export function setAdaptors(
  formValues: any,
  interestId: number[],
  userId: number = 0
): UserProfile {
  const demographicDetails = formValues[FORMS_KEYS.DEMOGRAPHIC_DETAILS];
  const educationDetails = formValues[FORMS_KEYS.EDUCATION_LIST];
  const experienceDetails = formValues[FORMS_KEYS.EXPERIENCE_DETAILS_LIST];
  const address = formValues[FORMS_KEYS.ADDRESS_LIST];

  const interestData =
    demographicDetails[DEMOGRAPHIC_DETAILS_FORMS_KEYS.INTERESTS];
  const interests = interestData.map((interest: any, index: number) => ({
    interestId: interestId[index] || 0, // Default to 0 if interestId is not provided
    value: interest.value,
  }));

  // Convert the demographicDetails object to the desired format
  return {
    userId: userId,
    demographicDetails: {
      firstName: demographicDetails[DEMOGRAPHIC_DETAILS_FORMS_KEYS.FIRSTNAME],
      lastName: demographicDetails[DEMOGRAPHIC_DETAILS_FORMS_KEYS.LASTNAME],
      email: demographicDetails[DEMOGRAPHIC_DETAILS_FORMS_KEYS.EMAIL],
      salutation: demographicDetails[DEMOGRAPHIC_DETAILS_FORMS_KEYS.SALUTATION],
      interests: interests,
      gender: demographicDetails[DEMOGRAPHIC_DETAILS_FORMS_KEYS.GENDER],
    },

    // Convert the educationDetails array to the desired format
    educationDetails: educationDetails.map((ed: EducationDetails) => ({
      credential: ed[EDUCATION_DETAILS_FORMS_KEYS.CREDENTIAL],
      institution: ed[EDUCATION_DETAILS_FORMS_KEYS.INSTITUTION],
      degreeCertificate: ed[EDUCATION_DETAILS_FORMS_KEYS.DEGREE_CERTIFICATE],
      state: ed[EDUCATION_DETAILS_FORMS_KEYS.STATE],
      city: ed[EDUCATION_DETAILS_FORMS_KEYS.CITY],
    })),

    // Convert the experienceDetails array to the desired format
    experienceDetails: experienceDetails.map((ex: any) => ({
      employer: ex[EXPERIENCE_DETAILS_FORMS_KEYS.EMPLOYER],
      role: ex[EXPERIENCE_DETAILS_FORMS_KEYS.ROLE],
      doj: ex[EXPERIENCE_DETAILS_FORMS_KEYS.DOJ],
      durationInMonths: ex[EXPERIENCE_DETAILS_FORMS_KEYS.DURATION_IN_MONTHS],
    })),

    // Convert the address array to the desired format
    address: address.map((address: any) => ({
      type: address[ADDRESS_FORMS_KEYS.TYPE],
      country: address[ADDRESS_FORMS_KEYS.COUNTRY],
      state: address[ADDRESS_FORMS_KEYS.STATE],
      city: address[ADDRESS_FORMS_KEYS.CITY],
      street: address[ADDRESS_FORMS_KEYS.DOOR_NO_AND_STREET],
      pincode: address[ADDRESS_FORMS_KEYS.PINCODE],
    })),
  };
}

// This function takes the form values and converts them into a UserProfile object.
// It maps the form values to the corresponding properties in the UserProfile interface.
export function responseAdaptor(data: UserProfile): UserProfileDetails {
  console.log('data', data);
  return {
    // Map form values to UserProfile properties
    userId: data.userId || 0,
    firstName: data.demographicDetails.firstName,
    lastName: data.demographicDetails.lastName,
    email: data.demographicDetails.email,
    salutation: data.demographicDetails.salutation,
    interests: data.demographicDetails.interests,
    gender: data.demographicDetails.gender,

    educationInformation: data.educationDetails.map((ed) => ({
      educationId: ed.educationId || 0,
      credential: ed.credential,
      institution: ed.institution,
      degreeCertificate: ed.degreeCertificate,
      educationState: ed.state,
      educationCity: ed.city,
    })),

    experienceInformation: data.experienceDetails.map((ex) => ({
      experienceId: ex.experienceId || 0,
      employer: ex.employer,
      role: ex.role,
      doj: formatDate(ex.doj),
      durationInMonth: ex.durationInMonths,
    })),

    address: data.address.map((address) => ({
      addressId: address.addressId || 0,
      type: address.type,
      country: address.country,
      state: address.state,
      city: address.city,
      doorNoStreet: address.street,
      pincode: address.pincode,
    })),
  };
}
