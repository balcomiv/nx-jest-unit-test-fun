import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private httpClient: HttpClient) {}

  getPage(page: number): Observable<unknown> {
    return this.httpClient.get(
      `http://jsonplaceholder.typicode.com/posts/${page}`
    );
  }
}
