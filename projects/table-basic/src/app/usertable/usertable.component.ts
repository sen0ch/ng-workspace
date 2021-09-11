import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
  })
  export class UsertableComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];
  // @Input()
  // items: User[];
  users: any = [];
  constructor(private userService: UserService) { }
  ngOnInit() {
  }
}

export class UserDataSource extends DataSource<any> {
    constructor(private userService: UserService) {
  super(); }
  connect(): Observable<User[]> {
  return this.userService.getUsers(); }
  disconnect() {} }
