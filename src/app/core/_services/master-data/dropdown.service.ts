import { inject, Injectable } from '@angular/core';
import { HttpBaseService } from '../http-base/http-base.service';
import {
  catchError,
  map,
  Observable,
  of,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';
import { MasterData, MasterList } from '../../_models/master-list';
import { API_URL_CONSTANTS } from '../../_constants/api-url-constants.constants';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  private dropdownData$: Observable<MasterData> | null = null;

  private http = inject(HttpBaseService);

  constructor() {}

  public getDropdownData(): Observable<MasterData> {
    this.dropdownData$ = this.http
      .get<MasterData>(
        `${environment.apiBaseUrl}${API_URL_CONSTANTS.MASTER_LIST}`
      )
      .pipe(
        shareReplay({ bufferSize: 1, refCount: true }),
        catchError((error) => {
          this.dropdownData$ = null;
          return throwError(() => error);
        })
      );

    return this.dropdownData$;
  }

  public getStates(id: number): Observable<MasterList[]> {
    return this.http
      .get<MasterList[]>(
        `${environment.apiBaseUrl}${API_URL_CONSTANTS.STATE_LIST}${id}`
      )
      .pipe(
        shareReplay({ bufferSize: 1, refCount: true }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  public getCities(
    countryId: number | null,
    stateId: number
  ): Observable<MasterList[]> {
    return this.http
      .get<MasterList[]>(
        `${environment.apiBaseUrl}${API_URL_CONSTANTS.CITY_LIST}${countryId}&stateId=${stateId}`
      )
      .pipe(
        shareReplay({ bufferSize: 1, refCount: true }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }
}
