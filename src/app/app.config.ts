import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { countryReducer } from './store/reducers/country.reducers';
import { CountryEffects } from './store/effects/country.effects';
import { themeReducer } from './store/reducers/theme.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState({ name: 'country', reducer: countryReducer }),
    provideState({ name: 'theme', reducer: themeReducer }),
    provideEffects([CountryEffects]),
  ],
};
