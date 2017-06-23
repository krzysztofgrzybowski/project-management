import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {
  private logInUser = {
    email: '',
    password: ''
  };
  hasErrors: boolean;
  errorMsgArray: string[];

  constructor(
    private tokenService: Angular2TokenService
  ) { }

  ngOnInit() {
  }

  onLogInSubmit() {
    this.tokenService.signIn(this.logInUser).subscribe(
      res => {
        this.hasErrors = false;
        this.logInUser = {
          email: '',
          password: ''
        };
      },
      error => {
        this.hasErrors = true;
        this.errorMsgArray = error.json()['errors']
        this.logInUser.password = '';
      }
    );
  }
}
