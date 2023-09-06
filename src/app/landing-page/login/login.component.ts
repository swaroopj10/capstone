import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: any;
  selected: string = '';
  email: string = '';
  password: string = '';
  countries: string[] = ["USA", "India", "Ireland"];
  constructor(private router: Router, private auth: LoginService, private snack: MatSnackBar) { }
  ngOnInit(): void {
  }
  formSubmit() {
    if (this.email == '' || this.password == null) {
      // alert('Email Address is Required');
      this.snack.open('Email Address is Required!!', '', {
        duration: 2100,
        // verticalPosition:'top',
        // horizontalPosition:'right',
      });
      return;
    }
    this.message = this.auth.login(this.email, this.password)
    if (this.message == 1) {
      Swal.fire(
        'Successfully Logged In! Welcome to Golden Securities!'
      )
      this.router.navigate(['/home']);
    }
    else if (this.message == 2) {
      Swal.fire(
        'Username and Password do not match! Please try again!',
        'Login Failed'
      )
      //this.router.navigate(['/']);
    }
    else {
      Swal.fire(
        'Invalid Credentials! Please try again!',
        'Login Failed'
      )
      //this.router.navigate(['/']);
    }
  };
}