import { Component } from '@angular/core';
import { CountryCardComponent } from '../../components/country-card/country-card.component';

@Component({
  selector: 'app-country-list',
  imports: [CountryCardComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent {}
