import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { User } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-members-list',
  templateUrl: './team-members-list.component.html',
  styleUrls: ['./team-members-list.component.sass']
})
export class TeamMembersListComponent implements OnInit {

  projectId: number;
  teamMembersList: User[];

  constructor(
    private _projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.projectId = this.route.snapshot.params['id']
    this.updateTeamMemberssList();
  }

  ngOnInit() {
  }

  updateTeamMemberssList() {
    this._projectService.getTeamMembers(this.projectId).subscribe(
      res => {
        this.teamMembersList = res;
      }
    )
  }

}
