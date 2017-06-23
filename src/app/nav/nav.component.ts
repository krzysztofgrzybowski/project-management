import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor(
    private tokenService: Angular2TokenService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOutUser() {
    this.tokenService.signOut().subscribe(
        res =>  {
          this.router.navigate(["/"])
        },
        error => {}
    );
  }
}
