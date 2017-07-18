import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.sass']
})
export class ProjectsListComponent implements OnInit {

  projectsList: Project[];
  assignedProjectsList: Project[];

  constructor(private _projectService: ProjectService) {
    this.updateProjectsList();
  }

  ngOnInit() {
  }

  updateProjectsList() {
    this._projectService.getProjects().subscribe(
      res => {
        this.projectsList = res;
      }
    )
    this._projectService.getAssignedProjects().subscribe(
      res => {
        this.assignedProjectsList = res;
      }
    )
  }

}
