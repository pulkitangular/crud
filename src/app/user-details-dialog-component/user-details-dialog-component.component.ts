import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-user-details-dialog-component',
  templateUrl: './user-details-dialog-component.component.html',
  styleUrls: ['./user-details-dialog-component.component.css']
})
export class UserDetailsDialogComponentComponent implements OnInit {
  user: any;

  constructor(public dialogRef: MatDialogRef<UserDetailsDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService) { }

  ngOnInit(): void {
    this.user = {...this.data};
  }
 
  // Update the user name from the list
  saveChanges(): void {
    const body ={
      firstName: this.user.firstName,
      lastName: this.user.lastName,
    }
    this.userService.updateUser(this.user.id, body).subscribe((data) => {
        alert('User updated successfully!');
        this.user = data;
      this.dialogRef.close(this.user);
    });
  }

  // cancel the popup
  cancel(): void {
    this.dialogRef.close();
  }
  

}
