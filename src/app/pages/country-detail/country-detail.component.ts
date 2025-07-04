import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  selectCountry,
  loadCountryByName,
} from '../../store/actions/country.action';
import {
  selectSelectedCountry,
  selectLoading,
} from '../../store/selectors/country.selector';
import { Country } from '../../Models/Country';
import { Store } from '@ngrx/store';
import { CommonModule, Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-detail',
  imports: [CommonModule],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss',
})
export class CountryDetailComponent implements OnInit {
  countryName: string | null = null;
  countryDetails!: Observable<Country | null>;
  loading$!: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private location: Location
  ) {
    // this.countryName = this.route.snapshot.paramMap.get('name');
  }
  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);

    this.route.paramMap.subscribe((params) => {
      this.countryName = params.get('countryName');
    });

    this.store.select(selectSelectedCountry).subscribe((country) => {
      if (!country && this.countryName) {
        this.store.dispatch(loadCountryByName({ name: this.countryName }));
      }
    });
    this.countryDetails = this.store.select(selectSelectedCountry);
  }

  onBackClicked() {
    this.location.back();
  }
  getNativeName(country: Country): string {
    const nativeNames = country.name.nativeName;
    const firstLangCode = Object.keys(nativeNames)[0];
    return nativeNames[firstLangCode]?.common || 'N/A';
  }

  getCurrency(country: Country): string {
    const currencies = country.currencies;
    const firstCurrencyCode = Object.keys(currencies)[0];
    const currency = currencies[firstCurrencyCode];
    return currency ? `${currency.name}` : 'N/A';
  }
  getLanguages(country: Country): string {
    return Object.values(country.languages).join(', ');
  }
}
