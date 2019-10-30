import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailBookingIdComponent } from './film-detail-booking-id.component';

describe('FilmDetailBookingIdComponent', () => {
  let component: FilmDetailBookingIdComponent;
  let fixture: ComponentFixture<FilmDetailBookingIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDetailBookingIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailBookingIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
