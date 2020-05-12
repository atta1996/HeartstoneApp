import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  formulario: any;
  userForm: boolean;

  constructor() {
    this.formulario = new FormGroup({
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'pass' : new FormControl('', [Validators.required, Validators.minLength(6)])
    })
    this.userForm = false;
  }

  login(){
    console.log("Email: " + this.formulario.value.email);
    console.log("Contraseña: " + this.formulario.value.pass);
    this.userForm = true;
  }


}
