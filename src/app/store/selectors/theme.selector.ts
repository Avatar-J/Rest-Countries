import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemeState } from '../state';

export const selectThemeState = createFeatureSelector<ThemeState>('theme');

export const selectTheme = createSelector(
  selectThemeState,
  (state) => state.isDarkMode
);
