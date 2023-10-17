import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientIdentification } from 'src/app/models/client-identification';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  clientId: string = '';
  message: any;
  selected: string = '';
  email: string = '';
  password: string = '';
  countries: string[] = ["USA", "India", "Ireland"];
  selectedCountry: string = '';
  selectedDOB!: Date | null;
  postalCode: any;
  selectedIdentificationType: string = '';
  identificationValue: any;
  maxDOB: Date;
  constructor(private router: Router, private clientService: ClientService, private snack: MatSnackBar) {
    const today = new Date();
    this.maxDOB = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
   }
  ngOnInit(): void {
  }
  formSubmit() {
    if (this.email == '' || this.selectedCountry == '', this.selectedDOB == null) {
      this.snack.open('All Fields are required!!', '', {
        duration: 2100,
      });
      return;
    }
    const formattedDate: string = `${this.selectedDOB.getFullYear()}-${(this.selectedDOB.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${this.selectedDOB.getDate().toString().padStart(2, '0')}`;
    const defaultDate: string = formattedDate ?? '2001-01-01';
    const client = new Client(
      this.clientId,
      this.email,
      defaultDate, 
      this.selectedCountry,
      this.postalCode,
      new ClientIdentification(this.selectedIdentificationType, this.identificationValue)
    );

    this.clientService.registerClient(client).subscribe({
      next: (response) => {
        sessionStorage.setItem('clientId', response.clientId);
        sessionStorage.setItem('email', response.email);
        sessionStorage.setItem('token', response.token);
        const clientId = response.clientId; // Access the clientId from the response
        const successMessage = `Successfully Registered! Welcome to Trade Wave. Your Client ID is: ${clientId}`;
        Swal.fire('Success', successMessage, 'success');
        this.router.navigate(['login']);
      },
      error: (error) => {
        Swal.fire('Error occurred', error.message || 'An error occurred', 'error');
        this.router.navigate(['register']);
      },
    })
  };
}
