import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailBookingComponent } from './film-detail-booking.component';

describe('FilmDetailBookingComponent', () => {
  let component: FilmDetailBookingComponent;
  let fixture: ComponentFixture<FilmDetailBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDetailBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
