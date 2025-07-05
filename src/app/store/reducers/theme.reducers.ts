import { switchTheme } from '../actions/country.action';
import { createReducer, on } from '@ngrx/store';
import { ThemeState } from '../state';

export const initialState: ThemeState = {
  isDarkMode: false,
};

export const themeReducer = createReducer(
  initialState,
  on(switchTheme, (state) => ({
    ...state,
    isDarkMode: !state.isDarkMode,
  }))
);
