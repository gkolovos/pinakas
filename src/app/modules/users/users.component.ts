import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
// import { User } from './user.model';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string ;

// }

// const ELEMENT_DATA: User[] = [
//   {id: 1, name: 'Hydrogen', username: 'fssv', email: 'H@dsdvms.com'},
//   {id: 2, name: 'Helium', username: 'svsd' , email: 'He@.com'} ];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  // userForm: FormGroup

  // constructor(private fb:FormBuilder){
  //   this.userForm = this.fb.group({
  //     id: ['',Validators.required],
  //     name: ['',Validators.required],
  //     username: ['',Validators.required],
  //     email: ['',Validators.required],

  //   })

  // }

  users$:User[] = [];

  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  dataSource = new MatTableDataSource<User> ( this.users$ );

  constructor(private usersService: UsersService) { }

  ngOnInit(){
      return this.usersService.getUsers()
      .subscribe(data => this.users$ = data);
    }
  }


