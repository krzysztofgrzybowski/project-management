import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';

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
