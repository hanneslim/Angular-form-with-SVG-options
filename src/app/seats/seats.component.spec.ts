import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsComponent } from './seats.component';

describe('SeatsComponent', () => {
  let component: SeatsComponent;
  let fixture: ComponentFixture<SeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
