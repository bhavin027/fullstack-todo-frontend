import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: String) {

    //console.log('Before login '+ this.isUserLoggedIn());

    if(username==="admin" && password==="test123") {
      sessionStorage.setItem('authenticatedUser', username);
      //console.log('after login '+ this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user===null);
  }

  logout () {
    sessionStorage.removeItem('authenticatedUser');
  }

}
