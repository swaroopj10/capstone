import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboAdvisorComponent } from './robo-advisor.component';
import { MatCardModule } from '@angular/material/card';

describe('RoboAdvisorComponent', () => {
  let component: RoboAdvisorComponent;
  let fixture: ComponentFixture<RoboAdvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboAdvisorComponent ],
      imports: [MatCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});