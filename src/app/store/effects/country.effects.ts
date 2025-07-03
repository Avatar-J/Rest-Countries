import { Injectable } from '@angular/core';
import { CountryApiService } from '../../services/country-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, mergeMap, switchMap, Observable } from 'rxjs';
import {
  loadCountriesSuccess,
  loadCountries,
  loadCountriesFailure,
} from '../actions/country.action';

@Injectable()
export class CountryEffects {
  loadCountries$;
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
  }
}
