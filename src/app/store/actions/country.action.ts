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
