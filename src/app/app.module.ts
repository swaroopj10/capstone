import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { InvestmentPreferenceComponent } from './dashboard/investment-preference/investment-preference.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';
import { BuyComponent } from './dashboard/buy/buy.component';
import { SellComponent } from './dashboard/sell/sell.component';
import { ActivityReportComponent } from './dashboard/activity-report/activity-report.component';
import { TradeHistoryComponent } from './dashboard/trade-history/trade-history.component';
import { RoboAdvisorComponent } from './dashboard/robo-advisor/robo-advisor.component';
import { LoginComponent } from './landing-page/login/login.component';
import { RegistrationComponent } from './landing-page/registration/registration.component';
import { DisplayComponent } from './landing-page/display/display.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    NavbarComponent,
    InvestmentPreferenceComponent,
    PortfolioComponent,
    BuyComponent,
    SellComponent,
    ActivityReportComponent,
    TradeHistoryComponent,
    RoboAdvisorComponent,
    LoginComponent,
    RegistrationComponent,
    DisplayComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatSnackBarModule,MatCardModule,MatToolbarModule,MatIconModule, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
