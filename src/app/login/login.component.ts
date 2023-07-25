import { Component } from '@angular/core';
// the authentication service
import { AuthService } from '../services/auth.service';
// the router module
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  //Dependencies injection
  constructor(
    private authService: AuthService,
    private router : Router,
  ) { }
    // UserData attribute to save the input from the form-infos
  userData = {
    email: '',
    password: ''
  };

  onSubmit() {
    //Test the Input infos by the login() method of the authService charged
    if (this.authService.login(this.userData.email, this.userData.password)) {
      // If the authentication is successful, perform the following actions
      // Redirect to the dashboard after a successful login
      this.router.navigate(['/home']);
    } else {
      // Else, an alert appears to display a warnning
      alert('Identifiants invalides');
    }
  }

}
