import { Country } from '../Models/Country';

export interface AppState {
  countries: CountryState;
  theme: ThemeState;
}
export interface CountryState {
  countries: Country[];
  selectedCountry: Country | null;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  filterRegion: string;
  borderCountries: Country[];
}
export interface ThemeState {
  isDarkMode: boolean;
}
