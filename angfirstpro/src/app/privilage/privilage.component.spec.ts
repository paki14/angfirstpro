import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilageComponent } from './privilage.component';

describe('PrivilageComponent', () => {
  let component: PrivilageComponent;
  let fixture: ComponentFixture<PrivilageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
