import { Component, inject, OnInit } from '@angular/core';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { CountryApiService } from '../../services/country-api.service';
import { Country } from '../../Models/Country';
import { Store } from '@ngrx/store';
import {
  selectAllCountries,
  selectLoading,
} from '../../store/selectors/country.selector';
import {
  loadCountries,
  loadCountriesSuccess,
} from '../../store/actions/country.action';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-list',
  imports: [CountryCardComponent, CommonModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent implements OnInit {
  CountryApiService = inject(CountryApiService);
  allcountries$!: Observable<Country[]>;
  loading$!: Observable<boolean>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);

    this.store.select(selectAllCountries).subscribe((countries) => {
      if (!countries.length) {
        this.store.dispatch(loadCountries());
      }
    });

    this.allcountries$ = this.store.select(selectAllCountries);
  }
}
