import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatSpinnerService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.loadingSubject.asObservable();

  constructor() {}

  setLoading(isLoading: boolean): void {
    console.log(isLoading);
    this.loadingSubject.next(isLoading);
    document.body.classList.toggle('no-scroll', isLoading);
  }
}
