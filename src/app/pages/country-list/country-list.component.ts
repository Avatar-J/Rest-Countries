import { Component, inject, OnInit } from '@angular/core';
import { CountryCardComponent } from '../../components/country-card/country-card.component';
import { CountryApiService } from '../../services/country-api.service';
import { Country } from '../../Models/Country';

@Component({
  selector: 'app-country-list',
  imports: [CountryCardComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent implements OnInit {
  CountryApiService = inject(CountryApiService);
  countries!: Country[];

  ngOnInit(): void {
    this.CountryApiService.getCountries().subscribe((data) => {
      console.log(data);
      this.countries = data;
    });
  }
}
