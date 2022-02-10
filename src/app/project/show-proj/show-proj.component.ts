import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-show-proj',
  templateUrl: './show-proj.component.html',
  styleUrls: ['./show-proj.component.css']
})
export class ShowProjComponent implements OnInit {

  constructor(private service: ProjectServiceService) { }

  ProjectList!: any[];

  ngOnInit(): void {
    this.refreshProjList();
  }

  refreshProjList(){
    this.service.getProjects().subscribe(data => {
      this.ProjectList=data;
    });
  }

}
