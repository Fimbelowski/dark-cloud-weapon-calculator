import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponContainerComponent } from './weapon-container.component';

describe('WeaponContainerComponent', () => {
  let component: WeaponContainerComponent;
  let fixture: ComponentFixture<WeaponContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponContainerComponent]
    });
    fixture = TestBed.createComponent(WeaponContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
