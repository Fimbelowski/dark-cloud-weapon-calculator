import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminusOptionsComponent } from './terminus-options.component';

describe('TerminusOptionsComponent', () => {
  let component: TerminusOptionsComponent;
  let fixture: ComponentFixture<TerminusOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminusOptionsComponent]
    });
    fixture = TestBed.createComponent(TerminusOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
