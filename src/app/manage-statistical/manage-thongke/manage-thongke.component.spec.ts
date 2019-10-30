import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageThongkeComponent } from './manage-thongke.component';

describe('ManageThongkeComponent', () => {
  let component: ManageThongkeComponent;
  let fixture: ComponentFixture<ManageThongkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageThongkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageThongkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
