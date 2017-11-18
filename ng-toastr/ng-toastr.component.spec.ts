import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgToastrComponent } from './ng-toastr.component';

describe('NgToastrComponent', () => {
  let component: NgToastrComponent;
  let fixture: ComponentFixture<NgToastrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgToastrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgToastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
