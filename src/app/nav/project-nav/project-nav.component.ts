import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-nav',
  templateUrl: './project-nav.component.html',
  styleUrls: ['./project-nav.component.sass']
})
export class ProjectNavComponent implements OnInit {

  projectId: Number;
  userRole: Number;
  menuItems = [];
  roles = ['admin', 'member', 'watcher'];

  constructor(
    private _projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe(event => {
      this.projectId = null;
      var url = this.router.url.split("/");
      if (url[1] == "projects" && url[2]) {
        this.projectId = Number(url[2]);
      }
      if (this.projectId) {
        this._projectService.getAssignmentForProject(this.projectId).subscribe(
          res => {
            this.userRole = res.role;
          }
        )
        this.createFullMenuList();
      }
    });
  }

  createFullMenuList() {
    this.menuItems = [
      {
        name: '(TO DO) Tasks',
        routerLink: ['/projects', this.projectId],
        rolesRequired: ['admin', 'member', 'watcher']
      },
      {
        name: 'Team',
        routerLink: ['/projects', this.projectId, 'team'],
        rolesRequired: ['admin', 'member', 'watcher']
      },
      {
        name: '(TO DO) Settings',
        routerLink: ['/projects', this.projectId, 'edit'],
        rolesRequired: ['admin']
      }
    ];
  }

  ngOnInit() {}

  getMenu() {
    return this.menuItems.filter(
      menuItem => menuItem.rolesRequired.includes(this.userRole)
    );
  }

}
