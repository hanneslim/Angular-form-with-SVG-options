import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReFormComponent } from './re-form.component';

describe('ReFormComponent', () => {
  let component: ReFormComponent;
  let fixture: ComponentFixture<ReFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
