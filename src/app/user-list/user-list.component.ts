import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  usersList = [];

  constructor(public userService: UsersService) { } // dependecy injection - для підключення залежностей з сервісом 

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }

}
