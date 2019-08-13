import { Injectable } from '@angular/core';
import {ApiService} from './api.service'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _api: ApiService, public _router: Router) { }

  token: string;

  isLogged: boolean;

  login(username, password): void{
    this._api.post("https://reqres.in/api/login", {"email": username,"password": password})
    .subscribe((response) => {
      this.token = response["token"];
      localStorage.setItem("token", this.token);
      this.isLogged = true;
      this._router.navigateByUrl("/")
    })
  }

  logout(): void{
    localStorage.removeItem("token");
    this.isLogged = false;
  }

  checkLogin(): void{
    if(localStorage.getItem("token") === null){
      this.isLogged = false;
    }
    else {
      this.isLogged = true;
    }
  }


}
