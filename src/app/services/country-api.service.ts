import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../Models/Country';
import { Observable } from 'rxjs';
import { catchError, retry, throwError } from 'rxjs';
import { ErrorServiceService } from './error-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
  constructor(
    private http: HttpClient,
    private errorHandler: ErrorServiceService
  ) {}

  private apiUrl =
    'https://restcountries.com/v3.1/all?fields=name,population,capital,region,subregion,languages,tld,currencies,borders,flags';

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl).pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => {
        this.errorHandler.handleError(err);
        return throwError(() => err);
      })
    );
  }

  getCountryByName(name: string): Observable<Country> {
    return this.http
      .get<Country>(
        `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,population,capital,region,subregion,languages,tld,currencies,borders,flags`
      )
      .pipe(
        retry(3),
        catchError((err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          return throwError(() => err);
        })
      );
  }
}
