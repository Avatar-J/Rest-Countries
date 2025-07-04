import { createAction, props } from '@ngrx/store';
import { Country } from '../../Models/Country';

export const loadCountries = createAction('[Country] Load Countries');

export const loadCountriesSuccess = createAction(
  '[Country] Load Countries Success',
  props<{ countries: Country[] }>()
);

export const loadCountriesFailure = createAction(
  '[Country] Load Countries Failure',
  props<{ error: string }>()
);

export const setSearchQuery = createAction(
  '[Country] Set Search Query',
  props<{ query: string }>()
);
export const setFilterRegion = createAction(
  '[Country] Set Filter Region',
  props<{ region: string }>()
);

export const selectCountry = createAction(
  '[Country] Select Country',
  props<{ country: Country }>()
);

export const loadCountryByName = createAction(
  '[Country] Load Country By Name',
  props<{ name: string }>()
);

export const loadCountryByNameSuccess = createAction(
  '[Country] Load Country By Name Success',
  props<{ country: Country }>()
);

export const loadCountryByNameFailure = createAction(
  '[Country] Load Country By Name Failure',
  props<{ error: string }>()
);
export const loadCountryByCode = createAction(
  '[Country] Load Country By Code',
  props<{ code: string }>()
);

export const loadCountryByCodeSuccess = createAction(
  '[Country] Load Country By Code Success',
  props<{ country: Country }>()
);

export const loadCountryByCodeFailure = createAction(
  '[Country] Load Country By Code Failure',
  props<{ error: string }>()
);
