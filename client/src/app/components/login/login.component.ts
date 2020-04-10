import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { LoginService } from '../../services/login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
//import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  respuesta = '';
  showMenu: boolean = false;

  /*login: Login = {
    email: '',
    clave: ''
  }*/

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      //firstName: ['', Validators.required],
      //lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
      //confirmPassword: ['', Validators.required]
    }/*,{
        validator: MustMatch('clave', 'confirmPassword')
    }*/);
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
          this.respuesta = err.error.message
        }
      )
  }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit(form) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        this.onLogin(form);
    }

}
