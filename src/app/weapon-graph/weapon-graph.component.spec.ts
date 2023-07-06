import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponGraphComponent } from './weapon-graph.component';

describe('WeaponGraphComponent', () => {
  let component: WeaponGraphComponent;
  let fixture: ComponentFixture<WeaponGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponGraphComponent]
    });
    fixture = TestBed.createComponent(WeaponGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
