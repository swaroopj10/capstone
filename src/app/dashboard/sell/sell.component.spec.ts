import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellComponent } from './sell.component';
import { MatCardModule } from '@angular/material/card';

describe('SellComponent', () => {
  let component: SellComponent;
  let fixture: ComponentFixture<SellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellComponent ],
      imports:[MatCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});