import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InvestmentPreferenceComponent } from './dashboard/investment-preference/investment-preference.component';
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';
import { BuyComponent } from './dashboard/buy/buy.component';
import { SellComponent } from './dashboard/sell/sell.component';
import { TradeHistoryComponent } from './dashboard/trade-history/trade-history.component';
import { RoboAdvisorComponent } from './dashboard/robo-advisor/robo-advisor.component';
import { ActivityReportComponent } from './dashboard/activity-report/activity-report.component';
import { LoginComponent } from './landing-page/login/login.component';
import { RegistrationComponent } from './landing-page/registration/registration.component';
import { DisplayComponent } from './landing-page/display/display.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent,
  children: [
    { path: '', component: DisplayComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent }
  ]
  },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'investment-preference', component: InvestmentPreferenceComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'buy', component: BuyComponent },
      { path: 'sell', component: SellComponent },
      { path: 'trade-history', component: TradeHistoryComponent },
      { path: 'robo-advisor', component: RoboAdvisorComponent },
      { path: 'activity-report', component: ActivityReportComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
