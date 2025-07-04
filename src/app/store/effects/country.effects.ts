import { Injectable } from '@angular/core';
import { CountryApiService } from '../../services/country-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, mergeMap, switchMap, Observable } from 'rxjs';
import {
  loadCountriesSuccess,
  loadCountries,
  loadCountriesFailure,
  loadCountryByName,
  loadCountryByNameSuccess,
  loadCountryByNameFailure,
} from '../actions/country.action';

@Injectable()
export class CountryEffects {
  loadCountries$;
  loadCountryByName$;

  constructor(
    private actions$: Actions,
    private apiService: CountryApiService
  ) {
    this.loadCountries$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadCountries),
        switchMap(() =>
          this.apiService.getCountries().pipe(
            map((countries) => loadCountriesSuccess({ countries })),
            catchError((error) =>
              of(loadCountriesFailure({ error: error.message }))
            )
          )
        )
      )
    );

    this.loadCountryByName$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadCountryByName),
        mergeMap(({ name }) =>
          this.apiService.getCountryByName(name).pipe(
            map((country) => loadCountryByNameSuccess({ country })),
            catchError((error) =>
              of(loadCountryByNameFailure({ error: error.message }))
            )
          )
        )
      )
    );
  }
}
