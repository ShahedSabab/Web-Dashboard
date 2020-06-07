import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface UsersData {
  Year: number;
  DC: number;
  FDC: number;
  FSI: number;
  AH: number;
  YI: number;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.sass']
})
export class DialogBoxComponent{

  action: string;
  // tslint:disable-next-line:variable-name
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event: this.action, data: this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event: 'Cancel'});
  }


}
