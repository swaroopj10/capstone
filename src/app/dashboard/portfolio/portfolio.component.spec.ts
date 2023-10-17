import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { MatCardModule } from '@angular/material/card';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioComponent ],
      imports:[MatCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create table',()=>{
    const compiled = fixture.debugElement.nativeElement;
    const table = compiled.querySelector('.container table');
    expect(table.rows.length).toBeGreaterThan(1);
    expect(table.rows[0].cells[0].textContent).toBe('instrumentID');
  })
  it('should retrive data from the service',()=>{
    expect(component.stocks.length).toBeGreaterThanOrEqual(0);
  })
});