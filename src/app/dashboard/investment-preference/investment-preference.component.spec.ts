import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPreferenceComponent } from './investment-preference.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('InvestmentPreferenceComponent', () => {
  let component: InvestmentPreferenceComponent;
  let fixture: ComponentFixture<InvestmentPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentPreferenceComponent ],
      imports:[MatCardModule,MatFormFieldModule,MatSelectModule,BrowserAnimationsModule,ReactiveFormsModule,
      FormsModule,MatCheckboxModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});