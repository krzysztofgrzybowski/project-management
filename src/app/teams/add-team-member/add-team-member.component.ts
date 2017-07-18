import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { TeamMembersListComponent } from '../team-members-list/team-members-list.component';

@Component({
  selector: 'app-add-team-member',
  templateUrl: './add-team-member.component.html',
  styleUrls: ['./add-team-member.component.sass']
})
export class AddTeamMemberComponent implements OnInit {

  @Input() teamMembersListReference: TeamMembersListComponent;
  newMemberEmail: string;
  newMemberRole: number = 0;
  projectId: number;
  hasErrors: boolean;
  errorMsgArray: string[];
  roles = [
   { id: 0, name: "admin" },
   { id: 1, name: "member" },
   { id: 2, name: "watcher" }
  ];

  constructor(
    private _projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.projectId = this.route.snapshot.params['id']
  }

  ngOnInit() {
  }

  onAddSubmit() {
    this._projectService.addTeamMemberToProject(this.newMemberEmail, this.projectId, this.newMemberRole).subscribe(
      res => {
        this.newMemberEmail = '';
        this.newMemberRole = 1;
        this.hasErrors = false;
        this.teamMembersListReference.updateTeamMembersList();
      },
      error => {
        this.hasErrors = true;
        this.errorMsgArray = error.json()["errors"];
      }
    );
  }

}
