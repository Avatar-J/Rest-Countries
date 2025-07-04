import { Routes } from '@angular/router';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: CountryListComponent,
    pathMatch: 'full',
  },
  {
    path: 'details/:code',
    component: CountryDetailComponent,
  },
];
