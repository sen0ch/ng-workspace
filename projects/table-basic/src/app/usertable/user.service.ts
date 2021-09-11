import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { map } from 'rxjs/operators';

const API = 'https://jsonplaceholder.typicode.com/users';

@Injectable()
export class UserService {

constructor(private httpClient: HttpClient) { }

// to get array?
getUsers(): Observable<User[]> {
    return this.httpClient
      .get(API)
      .pipe(
        map((data: any) => {
          return data;
        }));
  }
}
