import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsDialogComponentComponent } from '../user-details-dialog-component/user-details-dialog-component.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService, private dialog: MatDialog){

  }

  ngOnInit(): void {
    this.getUserList();
  }

  // get the user_list from the api; 
  getUserList(){
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  //open the dialog after click on list item
  openDetails(user: any): void {
    this.dialog.open(UserDetailsDialogComponentComponent, {
      data: user
    });
  }


}
