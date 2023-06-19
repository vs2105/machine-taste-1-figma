import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(massage: string, action: string) {
    this._snackBar.open(massage, action,{
      horizontalPosition:'center',
      verticalPosition:'top',
      duration:5000
    });
}
}