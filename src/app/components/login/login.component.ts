import { Component, OnInit } from '@angular/core';
import {LoginSignupServiceApi} from "../../services/login-service/login-service.api";
import {LoginSignup} from "../../services/login-service/login-service-response.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: LoginSignup;

  constructor(public loginService: LoginSignupServiceApi) {
    this.login = {
      "name": "Eliton Piranha",
      "username": "elitonpiranha",
      "role": "COMMON",
      "password": "abc123",
      "email": "elitonpiranha@gmail.com"
    }
  }

  ngOnInit(): void {
    this.loginService.doSignup(this.login).subscribe(data => console.log(data));
  }
}
