const INITIALIZE_COUNTRY_PAGE = 'countryReducer/INITIALIZE_COUNTRY_PAGE';

const initialState = {
  countryInfo: [],
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_COUNTRY_PAGE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const initializeCountryPage = (payload) => ({
  type: INITIALIZE_COUNTRY_PAGE,
  payload,
});

export default countryReducer;

