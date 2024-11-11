import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:5226/api/auth';

  constructor(private http: HttpClient) {}

  public isLoggedIn: boolean = false;
  private loginSubject = new BehaviorSubject(this.isLoggedIn);
  public login$ = this.loginSubject.asObservable();

  setLoginStatus(loggedIn: boolean) {
    this.isLoggedIn = loggedIn;
    this.loginSubject.next(loggedIn);
  }

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

  logout() {
    return this.http.post(`${this.url}/logout`, {}, { withCredentials: true });
  }
}
