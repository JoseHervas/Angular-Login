import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _user: UserService) { }

  password: string;
  username: string;

  sendData(){
    this._user.login(this.username, this.password)
  }

  ngOnInit() {
  }

}
