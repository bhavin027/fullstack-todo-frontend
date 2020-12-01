import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  // Dependency injection to inject router for redirects
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  handleLogin() {

    if(this.username==="admin" && this.password==="test123") {
      this.invalidLogin = false;
      // Redirect to welcome page
      this.router.navigate(['welcome']);
    }else{
      this.invalidLogin = true;
    }

    console.log("login invalid: "+this.invalidLogin);

  }

}
