import { Component, inject, OnInit } from '@angular/core';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { CountryApiService } from '../../services/country-api.service';
import { Country } from '../../Models/Country';
import { Store } from '@ngrx/store';
import { selectAllCountries } from '../../store/selectors/country.selector';
import {
  loadCountries,
  loadCountriesSuccess,
} from '../../store/actions/country.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  imports: [CountryCardComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent implements OnInit {
  CountryApiService = inject(CountryApiService);
  countries!: Country[];

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.CountryApiService.getCountries().subscribe((data) => {
      console.log(data);
      this.countries = data;
    });
  }
}
