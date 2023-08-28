import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeAddEditComponent } from './empolyee-add-edit.component';

describe('EmpolyeeAddEditComponent', () => {
  let component: EmpolyeeAddEditComponent;
  let fixture: ComponentFixture<EmpolyeeAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpolyeeAddEditComponent]
    });
    fixture = TestBed.createComponent(EmpolyeeAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
