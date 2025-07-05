import { Component, Input, inject } from '@angular/core';
import { Country } from '../../Models/Country';
import { RouterLink } from '@angular/router';
import { selectCountry } from '../../store/actions/country.action';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { selectTheme } from '../../store/selectors/theme.selector';

@Component({
  selector: 'app-country-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent {
  @Input() country: Country | undefined;

  store = inject(Store);

  isDarkTheme$: Observable<boolean> = this.store.select(selectTheme);

  onCountryClick(country: Country): void {
    this.store.dispatch(selectCountry({ country }));
  }
}
