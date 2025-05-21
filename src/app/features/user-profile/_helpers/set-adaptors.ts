import {
  ADDRESS_FORMS_KEYS,
  DEMOGRAPHIC_DETAILS_FORMS_KEYS,
  EDUCATION_DETAILS_FORMS_KEYS,
  EXPERIENCE_DETAILS_FORMS_KEYS,
  FORMS_KEYS,
} from '../_classes/create-profile-base-class';
import { EducationDetails, UserProfile } from '../_models/user-profile.models';

export function setAdaptors(formValues: any): UserProfile {
  const demographicDetails = formValues[FORMS_KEYS.DEMOGRAPHIC_DETAILS];
  const educationDetails = formValues[FORMS_KEYS.EDUCATION_LIST];
  const experienceDetails = formValues[FORMS_KEYS.EXPERIENCE_DETAILS_LIST];
  const address = formValues[FORMS_KEYS.ADDRESS_LIST];

  // Convert the demographicDetails object to the desired format
  return {
    demographicDetails: {
      firstName: demographicDetails[DEMOGRAPHIC_DETAILS_FORMS_KEYS.FIRSTNAME],
      lastName: demographicDetails[DEMOGRAPHIC_DETAILS_FORMS_KEYS.LASTNAME],
      email: demographicDetails[DEMOGRAPHIC_DETAILS_FORMS_KEYS.EMAIL],
      salutation: demographicDetails[DEMOGRAPHIC_DETAILS_FORMS_KEYS.SALUTATION],
      interests: demographicDetails[DEMOGRAPHIC_DETAILS_FORMS_KEYS.INTERESTS],
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
