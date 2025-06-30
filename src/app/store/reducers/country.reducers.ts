import { CountryState } from '../state';
import { createReducer, on } from '@ngrx/store';
import { Country } from '../../Models/Country';
import {
  loadCountries,
  loadCountriesSuccess,
  setSearchQuery,
  setFilterRegion,
  selectCountry,
} from '../actions/country.action';

export const initialState: CountryState = {
  countries: [],
  selectedCountry: null,
  loading: false,
  error: null,
  searchQuery: '',
  filterRegion: '',
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
  }))
);
