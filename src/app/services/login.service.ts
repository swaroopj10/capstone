import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }
  data = [{
    emailid: "abc123@gmail.com",
    id: 123,
    DOB: 290502,
    country: 'ind',
    postalcode: 515201,
    password: 'abc123'
  }];
  public login(email: string, password: string): number {

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].emailid == email) {
        if (this.data[i].password == password) {

          let msg = 1;
          return msg;
        }
        else {
          let msg = 3;
          return msg
        }
      }
      else {
        let msg = 2;
        return msg;
      }
    };
    let msg = 0;
    return msg;
  }
}
