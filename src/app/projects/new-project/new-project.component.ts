import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.sass']
})
export class NewProjectComponent implements OnInit {

  private newProject: Project = {
    name: ''
  };
  hasErrors: boolean;
  errorMsgArray: string[];

  constructor(
    private _projectService: ProjectService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onCreateSubmit() {
    this._projectService.createProject(this.newProject).subscribe(
      res => {
        this.router.navigate(['/projects']);
      },
      error => {
        this.hasErrors = true;
        this.errorMsgArray = error.json()["errors"];
        console.log(this.errorMsgArray);
      }
    );
  }

}
