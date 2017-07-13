import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectService } from './services/project.service';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { KeysPipe } from './pipes/keys.pipe';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { ProjectComponent } from './projects/project/project.component';
import { TeamComponent } from './teams/team/team.component';
import { AddTeamMemberComponent } from './teams/add-team-member/add-team-member.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    AuthDialogComponent,
    DashboardComponent,
    LogInComponent,
    AuthComponent,
    RegisterComponent,
    ProjectsListComponent,
    NewProjectComponent,
    KeysPipe,
    EditProjectComponent,
    ProjectComponent,
    TeamComponent,
    AddTeamMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Angular2TokenService,
    ProjectService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
