import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-team-member',
  templateUrl: './add-team-member.component.html',
  styleUrls: ['./add-team-member.component.sass']
})
export class AddTeamMemberComponent implements OnInit {

  newMemberEmail: string;
  projectId: number;
  hasErrors: boolean;
  errorMsgArray: string[];

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
    this._projectService.addMemberToProject(this.newMemberEmail, this.projectId, 0).subscribe(
      res => {
        this.newMemberEmail = '';
        this.hasErrors = false;
      },
      error => {
        this.hasErrors = true;
        this.errorMsgArray = error.json()["errors"];
      }
    );
  }

}
