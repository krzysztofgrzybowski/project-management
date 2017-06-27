import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

export interface Project {
  id?: number;
  name?: string;
}

@Injectable()
export class ProjectService {

  constructor(private tokenService: Angular2TokenService) {
  }

  getProjects() {
    return this.tokenService.get('projects').map(res => res.json());
  }

  createProject(project) {
    return this.tokenService.post('projects', project).map(res => res.json());
  }

}