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

export const selectFilteredCountries = createSelector(
  selectAllCountries,
  selectSearchQuery,
  (countries, query) =>
    countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    )
);

export const selectFilterRegion = createSelector(
  selectCountryState,
  (state) => state.filterRegion
);

export const selectCountriesByFiltering = createSelector(
  selectAllCountries,
  selectFilterRegion,
  selectSearchQuery,
  (countries, region, query) => {
    if (!region && !query) return countries;
    return countries.filter((c) => {
      const matchesRegion =
        !region || c.region.toLowerCase() === region.toLowerCase();
      const matchesQuery =
        !query || c.name.common.toLowerCase().includes(query.toLowerCase());
      return matchesRegion && matchesQuery;
    });
  }
);
