/**
 * @file
 * Dummy cookie-based auth.
 * Authenticating just means setting a 'user' cookie. No password required.
 */
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Observable, of } from 'rxjs';
import { ReplaySubject } from 'rxjs';


import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userObs = new ReplaySubject<User>(1);
  private isLoggedInObs = new ReplaySubject<boolean>(1);

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.checkCurrentUser();
  }

  getCurrentUser(): Observable<User> {
    return this.userObs.asObservable();
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInObs.asObservable();
  }

  /**
   * Check if we already have a current user (cookie).
   */
  checkCurrentUser(): void {
    let user;
    const userCookie = this.getCookie('user');
    if (userCookie) {
      const userData = JSON.parse(userCookie);
      user = new User(userData);
    }
    this.userObs.next(user);
    this.isLoggedInObs.next(!!user);
  }

  signIn(): Observable<User> {
    const userData = {name: 'Bob', email: 'bob@bob.com'};
    this.setCookie('user', JSON.stringify(userData));
    this.checkCurrentUser();
    return of(new User(userData));
  }

  signOut(): Observable<any> {
    // console.log('deleteCookie');
    this.deleteCookie('user');
    this.checkCurrentUser();
    return of(undefined);
  }

  //
  // Private methods
  //

  private setCookie(name: string, value: string): void {
    this.document.cookie = `${name}=${value}`;
  }

  /**
   * Quick & dirty way to extract a specific cookie
   * from the cookie string.
   *
   * Cookie string format: "name=Vince; foo=bar"
   */
  private getCookie(name: string = ''): string {
    const allCookiesString = this.document.cookie;
    const index1 = allCookiesString.indexOf(name);
    if (index1 !== -1) {
      let index2 = allCookiesString.indexOf(';', index1);
      index2 = index2 === -1 ? allCookiesString.length : index2;
      const cookieString = allCookiesString.slice(index1, index2);
      return cookieString.split('=')[1];
    }
    return '';
  }

  deleteCookie(name: string): void {
    this.document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
}
