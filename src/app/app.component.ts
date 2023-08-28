import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpolyeeAddEditComponent } from './empolyee-add-edit/empolyee-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic-crud-app';

  constructor(private _dialog: MatDialog) {}

  openAddEditEmployeeForm() {
    this._dialog.open(EmpolyeeAddEditComponent);
  }
}
