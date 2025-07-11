import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  selectCountry,
  loadCountryByName,
  loadCountryByCode,
} from '../../store/actions/country.action';
import {
  selectSelectedCountry,
  selectLoading,
} from '../../store/selectors/country.selector';
import { Country } from '../../Models/Country';
import { Store } from '@ngrx/store';
import { CommonModule, Location } from '@angular/common';
import { Observable } from 'rxjs';
import { selectTheme } from '../../store/selectors/theme.selector';

@Component({
  selector: 'app-country-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss',
})
export class CountryDetailComponent implements OnInit {
  countryName: string | null = null;
  countryDetails!: Observable<Country | null>;
  loading$!: Observable<boolean>;
  store = inject(Store);

  isDarkTheme$: Observable<boolean> = this.store.select(selectTheme);

  constructor(private route: ActivatedRoute, private location: Location) {}
  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);

    this.route.paramMap.subscribe((params) => {
      const code = params.get('code');
      if (code) {
        this.store.dispatch(loadCountryByCode({ code }));
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
  // getCommonName(code: string) {
  //   if (code) {
  //       this.store.dispatch(loadCountryByCode({ code }));
  //     }
  // }

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
