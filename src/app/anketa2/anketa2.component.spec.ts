import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anketa2Component } from './anketa2.component';

describe('Anketa2Component', () => {
  let component: Anketa2Component;
  let fixture: ComponentFixture<Anketa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anketa2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Anketa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
