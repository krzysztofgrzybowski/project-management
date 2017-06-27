import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.sass']
})
export class EditProjectComponent implements OnInit {

  private editProject: Project;
  hasErrors: boolean;
  errorMsgArray: string[];

  constructor(
    private _projectService: ProjectService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onUpdateSubmit() {
    this._projectService.updateProject(this.editProject).subscribe(
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
