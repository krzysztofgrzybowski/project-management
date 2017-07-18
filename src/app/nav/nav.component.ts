import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  projectId: number;

  constructor(
    private tokenService: Angular2TokenService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe(event => {
      this.projectId = null;
      var url = this.router.url.split("/");
      if (url[1] == "projects" && url[2]) {
        this.projectId = Number(url[2]);
      }
    });
  }

  ngOnInit() {
  }

  logOutUser() {
    this.router.navigate(["/"])
    this.tokenService.signOut().subscribe(
      res =>  {
      },
      error => {}
    );
  }
}
