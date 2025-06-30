import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from '../state';

export const selectCountryState =
  createFeatureSelector<CountryState>('country');

export const selectAllCountries = createSelector(
  selectCountryState,
  (state) => state.countries
);

export const selectLoading = createSelector(
  selectCountryState,
  (state) => state.loading
);

export const selectSearchQuery = createSelector(
  selectCountryState,
  (state) => state.searchQuery
);

export const selectFilterRegion = createSelector(
  selectCountryState,
  (state) => state.filterRegion
);
