import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';

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
    private tokenService: Angular2TokenService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogInSubmit() {
      this.tokenService.signIn(this.logInUser).subscribe(
        () => {
          this.hasErrors = false;
        },
        (response) => {
          this.hasErrors = true;
          this.errorMsgArray = response.json()['errors']
          this.logInUser = {
            email: '',
            password: ''
          };
        }
      );
    }

}
