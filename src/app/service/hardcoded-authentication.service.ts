import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: String, password: String) {
    if(username==="admin" && password==="test123") {
      return true;
    }
    return false;
  }

}
