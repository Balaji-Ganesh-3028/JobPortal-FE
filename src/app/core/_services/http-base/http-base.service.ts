import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpBaseService {
  private http = inject(HttpClient);
  constructor() {}

  /**
   * Sends a POST request to the specified URL with the provided data.
   * @param url - The URL to which the POST request is sent.
   * @param data - The data to be sent in the body of the POST request.
   * @returns An Observable of type T containing the response from the server.
   */
  public post<TResponse, TRequest>(
    url: string,
    data: TRequest
  ): Observable<TResponse> {
    // Implement the logic to make a POST request
    return this.http.post<TResponse>(url, data);
  }

  /**
   * Sends a GET request to the specified URL.
   * @param url - The URL to which the GET request is sent.
   * @returns An Observable of type T containing the response from the server.
   */
  public get<T>(url: string): Observable<T> {
    // Implement the logic to make a GET request
    return this.http.get<T>(url);
  }

  /**
   * Sends a PUT request to the specified URL with the provided data.
   * @param url - The URL to which the PUT request is sent.
   * @param data - The data to be sent in the body of the PUT request.
   * @returns An Observable of type T containing the response from the server.
   */
  public put<T>(url: string, data: T): Observable<T> {
    // Implement the logic to make a PUT request
    return this.http.put<T>(url, data);
  }

  /**
   * Sends a DELETE request to the specified URL.
   * @param url - The URL to which the DELETE request is sent.
   * @returns An Observable of type T containing the response from the server.
   */
  public delete<T>(url: string): Observable<T> {
    // Implement the logic to make a DELETE request
    return this.http.delete<T>(url);
  }
}
