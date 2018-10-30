import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedLeaveComponent } from './accepted-leave.component';

describe('AcceptedLeaveComponent', () => {
  let component: AcceptedLeaveComponent;
  let fixture: ComponentFixture<AcceptedLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
