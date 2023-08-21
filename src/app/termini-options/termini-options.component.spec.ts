import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminiOptionsComponent } from './termini-options.component';

describe('TerminiOptionsComponent', () => {
  let component: TerminiOptionsComponent;
  let fixture: ComponentFixture<TerminiOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminiOptionsComponent]
    });
    fixture = TestBed.createComponent(TerminiOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
