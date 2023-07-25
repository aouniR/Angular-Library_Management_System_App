import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // the isLoggedIn attribute to test is the user is authenticated or not to display the right buttons in the header
  isLoggedIn!: boolean;
  // the isLoggedInAs is an attribute to show the authenticated user mail address
  isLoggedInAs;
  // The show attribute is used to show or hide buttons on the header section
  @Input() show!: boolean; 

  // Dependencies Injection
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    // Initialize the header 
    if(localStorage.getItem('isAuthenticated')==='true'){
      this.isLoggedIn=localStorage.getItem('loggedIn')==='true';
      this.isLoggedInAs=localStorage.getItem('loggedInAs');
    }else{
      this.isLoggedIn=false;
    }
   
  }

  // The event binding when login button cliked
  login() {
    //redirect user to the login route
    this.router.navigate(['login']);
  }
  //TO-DO : add a register method to create a new user account
  register() {
    // Implement registration functionality here
  }

  logout() {
    // Implement the logout() method of the authService injected
    this.authService.logout();
    // Reset attributes
    this.isLoggedIn = false;
    this.isLoggedInAs = '';
    // Clear values from localStorage when logging out
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('loggedInAs');
    // Navigate to the welcome page after logout
    this.router.navigate(['welcome']); 
  }
}
