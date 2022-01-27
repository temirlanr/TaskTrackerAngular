import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ShowProjComponent } from './project/show-proj/show-proj.component';
import { AddEditProjComponent } from './project/add-edit-proj/add-edit-proj.component';
import { TaskComponent } from './task/task.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEditTaskComponent } from './task/add-edit-task/add-edit-task.component';
import { ShowTaskComponent } from './task/show-task/show-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ShowProjComponent,
    AddEditProjComponent,
    TaskComponent,
    AddEditTaskComponent,
    ShowTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
