import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Starwars } from './starwars';

@Injectable()
export class StarwarsService {
  private url = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  getStarwars(): Observable<Starwars[]> {
    return this.httpClient.get<Starwars[]>(this.url);
  }

  delete(Starwarsid): Observable<void> {
    console.log('Deleting ID: ' + Starwarsid);
    return this.httpClient.delete<void>(this.url + Starwarsid);
  }

  save(starwars: Starwars): Observable<Starwars> {
    if (starwars._id) {
      return this.httpClient.put<Starwars>(this.url + starwars._id, starwars);
    } else {
      return this.httpClient.post<Starwars>(this.url, starwars);
    }

  }
}
