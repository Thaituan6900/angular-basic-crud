import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  // onFormSubmit() {
  //   if (this.empForm.valid) {
  //     if (this.data) {
  //       this._empService
  //         .updateEmployee(this.data.id, this.empForm.value)
  //         .subscribe({
  //           next: (val: any) => {
  //             this._coreService.openSnackBar('Employee detail updated!');
  //             this._dialogRef.close(true);
  //           },
  //           error: (err: any) => {
  //             console.error(err);
  //           },
  //         });
  //     } else {
  //       this._empService.addEmployee(this.empForm.value).subscribe({
  //         next: (val: any) => {
  //           this._coreService.openSnackBar('Employee added successfully');
  //           this._dialogRef.close(true);
  //         },
  //         error: (err: any) => {
  //           console.error(err);
  //         },
  //       });
  //     }
  //   }
  // }
  onFormSubmit() {
    if(this.empForm.valid) {
      console.log(this.empForm.value);
    }
  }
}
