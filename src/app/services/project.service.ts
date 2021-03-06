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

  getAssignedProjects() {
    return this.tokenService.get('projects/assigned').map(res => res.json());
  }

  getProject(projectId: Number) {
    return this.tokenService.get('projects/'+projectId).map(res => res.json());
  }

  createProject(project: Project) {
    return this.tokenService.post('projects', project).map(res => res.json());
  }

  updateProject(project: Project) {
    return this.tokenService.put('projects/'+project.id, project).map(res => res.json());
  }

  removeTeamMemberFromProject(project_assignment_id: number) {
    return this.tokenService.delete('project_assignments/'+project_assignment_id).map(res => res.json());
  }

  addTeamMemberToProject(email: string, project_id: number, role: number) {
    return this.tokenService.post('project_assignments', {
      email: email,
      project_id: project_id,
      role: role
    }).map(res => res.json());
  }

  getTeamMembers(projectId: Number) {
    return this.tokenService.get('projects/'+projectId+'/team_members').map(res => res.json());
  }

  getAssignmentForProject(project_id: Number) {
    return this.tokenService.get('project_assignments/for_project?project_id='+project_id).map(res => res.json());
  }

}
