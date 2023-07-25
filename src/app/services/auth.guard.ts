// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // Dependency Injection of router service
  constructor( private router: Router) {
  }

  // Definition of the authorization logic
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Test by the local storage Item 'isAuthenticated' which is charged in the auth.service when the user try to submit a login() test from the loginComponent
    if (localStorage.getItem('isAuthenticated') === 'true') {
      // Test if the called url is '/login' to redirect the user to the home page without login test because he is already logged in
      if (state.url === '/login') {
        return this.router.navigate(['/home']);
      }else{
      // User is authenticated, allow access to the any other route
      return true
    }
    } else {
      // Test if the called url is '/login' to stay there or to redirect the user to the welcome component
      if (state.url === '/login') {
        return true
      }else{
      // User is not authenticated, redirect to welcome page
      return this.router.createUrlTree(['/welcome']);
      }
      }
    }
  
}
