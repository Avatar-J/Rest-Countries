export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [lang: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    [languageCode: string]: string;
  };
  tld: string[];
  currencies: {
    [currencyCode: string]: {
      symbol: string;
      name: string;
    };
  };
  borders: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
