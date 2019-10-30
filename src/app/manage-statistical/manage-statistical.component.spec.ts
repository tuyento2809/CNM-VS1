import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStatisticalComponent } from './manage-statistical.component';

describe('ManageStatisticalComponent', () => {
  let component: ManageStatisticalComponent;
  let fixture: ComponentFixture<ManageStatisticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStatisticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStatisticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
