import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.sass']
})
export class EditProjectComponent implements OnInit {

  private editProject: Project = {
    id: 0,
    name: ''
  };
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
    this.editProject = this._projectService.getProject(this.projectId).subscribe(
      res => {
        this.editProject = res;
      }
    );
    console.log(this.editProject);
  }

  onUpdateSubmit() {

  }

}
