import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:5226/api/auth';

  constructor(private http: HttpClient) {}

  register(username: string, password: string) {
    return this.http.post(
      `${this.url}/register`,
      { username, password },
      { withCredentials: true }
    );
  }

  login(username: string, password: string) {
    return this.http.post(
      `${this.url}/login`,
      { username, password },
      { withCredentials: true }
    );
  }
}
