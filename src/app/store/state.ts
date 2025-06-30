import { Country } from '../Models/Country';

export interface CountryState {
  countries: Country[];
  selectedCountry: Country | null;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  filterRegion: string;
}
