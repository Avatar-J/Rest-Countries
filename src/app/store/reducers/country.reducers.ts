import { CountryState } from '../state';
import { createReducer, on } from '@ngrx/store';
import {
  loadCountries,
  loadCountriesSuccess,
  setSearchQuery,
  setFilterRegion,
  selectCountry,
  loadCountryByNameSuccess,
  loadCountryByNameFailure,
  loadCountryByName,
  loadCountryByCode,
  loadCountryByCodeFailure,
  loadCountryByCodeSuccess,
  loadBorderCountriesSuccess,
} from '../actions/country.action';

export const initialState: CountryState = {
  countries: [],
  selectedCountry: null,
  loading: false,
  error: null,
  searchQuery: '',
  filterRegion: '',
  borderCountries: [],
};

export const countryReducer = createReducer(
  initialState,
  on(loadCountries, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries,
    loading: false,
  })),
  on(setSearchQuery, (state, { query }) => ({
    ...state,
    searchQuery: query,
  })),
  on(setFilterRegion, (state, { region }) => ({
    ...state,
    filterRegion: region,
  })),
  on(selectCountry, (state, { country }) => ({
    ...state,
    selectedCountry: country,
  })),
  on(loadCountryByNameSuccess, (state, { country }) => ({
    ...state,
    selectedCountry: country,
    error: null,
  })),

  on(loadCountryByNameFailure, (state, { error }) => ({
    ...state,
    selectedCountry: null,
    error,
  })),
  on(loadCountryByName, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadCountryByCodeSuccess, (state, { country }) => ({
    ...state,
    selectedCountry: country,
    loading: false,
  })),

  on(loadCountryByCodeFailure, (state, { error }) => ({
    ...state,
    selectedCountry: null,
    loading: false,
    error,
  })),
  on(loadCountryByCode, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadBorderCountriesSuccess, (state, { countries }) => ({
    ...state,
    borderCountries: countries,
  }))
);
