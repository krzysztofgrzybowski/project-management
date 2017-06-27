import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectComponent } from './projects/project/project.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        component: ProjectsListComponent
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            component: ProjectsListComponent,
          },
          {
            path: 'new',
            component: NewProjectComponent
          },
          {
            path: ':id',
            component: ProjectComponent
          },
          {
            path: ':id/edit',
            component: EditProjectComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
