import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Dependency injection
  constructor( private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService ) { }

  ngOnInit(): void {
  }

  handleLogin() {

    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
      this.invalidLogin = false;
      // Redirect to welcome page
      this.router.navigate(['welcome']);
    }else{
      this.invalidLogin = true;
    }

    console.log("login invalid: "+this.invalidLogin);

  }

}
