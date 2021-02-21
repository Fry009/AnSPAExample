import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCardExtendedComponent } from './hotel-card-extended.component';

describe('HotelCardExtendedComponent', () => {
  let component: HotelCardExtendedComponent;
  let fixture: ComponentFixture<HotelCardExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelCardExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCardExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
