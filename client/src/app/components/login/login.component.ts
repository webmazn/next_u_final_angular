import { Component, OnInit } from '@angular/core';

import { Login } from '../../models/Login'
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    email: '',
    clave: ''
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  loginUser(){
    console.log(this.login);
    this.loginService.getLogin(this.login)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
  }

}
