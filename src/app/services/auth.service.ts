import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Here is the login() method, it tests with a static email and password
  // TO-DO : authenticaion using an API (FireBase Authenticaiton or an other custom API) 
  login(email: string, password: string): boolean {

    if (email === 'aouni.radhouan@outlook.com' && password === '1234') {
      // Save these Item in local storage of angular to use them in other component test method
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('loggedInAs', email);
      return true;
    }
    localStorage.removeItem('isAuthenticated');
    localStorage.setItem('loggedIn', 'flase');
    localStorage.setItem('loggedInAs', '');

    return false;
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.setItem('loggedIn', 'flase');
    localStorage.setItem('loggedInAs', '');
  }
}
