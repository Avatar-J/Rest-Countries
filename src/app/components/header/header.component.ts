import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchTheme } from '../../store/actions/country.action';
import { CommonModule } from '@angular/common';
import { selectTheme } from '../../store/selectors/theme.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  store = inject(Store);
  isDarkTheme$: Observable<boolean> = this.store.select(selectTheme);

  onThemeChange() {
    this.store.dispatch(switchTheme());
  }
}
