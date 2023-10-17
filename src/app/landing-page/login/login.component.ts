import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { ClientResponse } from 'src/app/models/client-response';

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

  constructor(private router: Router, private auth: AuthService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.email == '' || this.password == null) {
      this.snack.open('All Fields are required!!', '', {
        duration: 2100,
      });
      return;
    }

    this.auth.login(this.email, this.password).subscribe({
      next: (response: any) => {
        // Successfully logged in
        sessionStorage.setItem('clientId', this.password);
        sessionStorage.setItem('email', this.email);
        sessionStorage.setItem('token', response)
        const clientId = sessionStorage.getItem('clientId');
        const defaultClientId: string = clientId ?? '100';
        Swal.fire('Successfully Logged In! Welcome to Trade Wave');
        this.auth.checkInvestmentPreferences(defaultClientId).subscribe({
          next: (hasInvestmentPreferences: boolean) => {
            if (!hasInvestmentPreferences) {
              this.router.navigate(['dashboard/investment-preference']);
            } else {
              this.router.navigate(['dashboard/portfolio']);
            }
          },
          error: (error: string) => {
            // Handle error when checking investment preferences
            Swal.fire('Error', 'Failed to check investment preferences', 'error');
            this.router.navigate(['dashboard/investment-preference']);
          },
        });
      },
      error: (error: string) => {
        // Handle login errors
        Swal.fire('Login Failed', error, 'error');
      },
    });
  }
}
