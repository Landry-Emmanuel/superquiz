import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGard implements CanActivate {

  constructor(private _authService: AuthService,
              private router: Router) { }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this._authService.isLoggedIn()
      .pipe(tap(isLoggedIn => {
        
        if(!isLoggedIn) {
          alert('Veuillez vous authentifier avant de continuer !');
          this.router.navigate(['/login']);
        }
      })
    )
  }
}
