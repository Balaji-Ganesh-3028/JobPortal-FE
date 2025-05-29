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
  UserProfileResponse,
} from '../_models/user-profile.models';

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

// This function takes the form values and converts them into a UserProfile object.
// It maps the form values to the corresponding properties in the UserProfile interface.
export function responseAdaptor(data: UserProfile): UserProfileResponse {
  return {
    // Map form values to UserProfile properties
    FirstName: data.demographicDetails.firstName,
    LastName: data.demographicDetails.lastName,
    Email: data.demographicDetails.email,
    Salutation: data.demographicDetails.salutation,
    Interests: data.demographicDetails.interests,
    Gender: data.demographicDetails.gender,

    EducationInformation: data.educationDetails.map((ed) => ({
      EducationId: ed.educationId || 0,
      Credential: ed.credential,
      Institution: ed.institution,
      DegreeCertificate: ed.degreeCertificate,
      EducationState: ed.state,
      EducationCity: ed.city,
    })),

    ExperienceInformation: data.experienceDetails.map((ex) => ({
      ExperienceId: ex.experienceId || 0,
      Employer: ex.employer,
      Role: ex.role,
      DOJ: formatDate(ex.doj),
      DurationInMonth: ex.durationInMonths,
    })),

    Address: data.address.map((address) => ({
      AddressId: address.addressId || 0,
      Type: address.type,
      Country: address.country,
      State: address.state,
      City: address.city,
      DoorNoStreet: address.street,
      Pincode: address.pincode,
    })),
  };
}
