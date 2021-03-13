import * as axios from 'axios';

export const fetchCountriesAPI = (language) => {
  return axios
    .get(
      // `http://localhost:3000/database/${language}.json`
      `database/${language}.json`
    )
};