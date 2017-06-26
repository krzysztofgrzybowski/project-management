import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };
  hasErrors: boolean;
  errorMsgArray: string[];

  constructor(
    private tokenService: Angular2TokenService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    this.tokenService.registerAccount(this.registerUser).subscribe(
      res => {
        this.hasErrors = false;
        this.tokenService.signIn({
          email: this.registerUser.email,
          password: this.registerUser.password
        });
        console.log(this.registerUser);
      },
      error => {
        this.hasErrors = true;
        this.errorMsgArray = error.json()['errors'].full_messages;
        this.registerUser = {
          email: this.registerUser.email,
          password: '',
          passwordConfirmation: ''
        };
      }
    );
  }
}
