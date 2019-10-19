import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
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

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form): void{
    console.log(form.value);
    this.loginService.login(form.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        err => {
          console.error(err);
        }
      )
  }

}
