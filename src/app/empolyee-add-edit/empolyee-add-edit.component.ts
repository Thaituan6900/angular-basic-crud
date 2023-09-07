import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-empolyee-add-edit',
  templateUrl: './empolyee-add-edit.component.html',
  styleUrls: ['./empolyee-add-edit.component.scss'],
})
export class EmpolyeeAddEditComponent {
  empForm: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpolyeeAddEditComponent>,
    private _coreService: CoreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              // alert('Employee updated succesfully!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee added successfully');
            // alert('Employee added succesfully!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
  // onFormSubmit() {
  //   if (this.empForm.valid) {
  //     // console.log(this.empForm.value);
  //     this._empService.addEmployee(this.empForm.value).subscribe({
  //       next: (val: any) => {
  //         alert('Employee added succesfully!');
  //         // this._coreService.openSnackBar('Employee added successfully');
  //         this._dialogRef.close(true);
  //       },
  //       error: (err: any) => {
  //         console.error(err);
  //       },
  //     });
  //   }
  // }
}
