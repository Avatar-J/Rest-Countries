import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { selectCountriesByFiltering } from '../../store/selectors/country.selector';
import { CountryApiService } from '../../services/country-api.service';
import { selectCountry } from '../../store/actions/country.action';
import { selectSelectedCountry } from '../../store/selectors/country.selector';
import { Country } from '../../Models/Country';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-detail',
  imports: [],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss',
})
export class CountryDetailComponent {
  countryName: string | null = null;
  countryDetails!: Country;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private location: Location
  ) {
    // this.countryName = this.route.snapshot.paramMap.get('name');
    this.route.paramMap.subscribe((params) => {
      this.countryName = params.get('countryName');
    });

    this.store.select(selectSelectedCountry).subscribe((country) => {
      // if (!country) {
      //   this.store.dispatch(CountryActions.loadCountryByName({ code }));
      // }
    });
  }

  onBackClicked() {
    this.location.back();
  }
}
