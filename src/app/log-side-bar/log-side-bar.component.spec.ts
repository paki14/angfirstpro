import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSideBarComponent } from './log-side-bar.component';

describe('LogSideBarComponent', () => {
  let component: LogSideBarComponent;
  let fixture: ComponentFixture<LogSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
