import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  usersList: User[] = [];

  constructor(public userService: UsersService) { } // dependecy injection - для підключення залежностей з сервісом 

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }

  search(query: string) {
    this.usersList = this.userService.findUser(query);  
  }

  sort(direction: string) {
    console.log(direction);    
    this.usersList = this.userService.sortUsers(direction);  
  }

}
