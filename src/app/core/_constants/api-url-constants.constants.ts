export const API_URL_CONSTANTS = {
  MASTER_LIST: 'masterslist',
  STATE_LIST: 'stateslist?countryId=',
  // Note: The countryId should be appended dynamically when making the request
  CITY_LIST: 'citylist?countryId=',
} as const;
