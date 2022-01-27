import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from 'src/Project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json-patch+json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  readonly apiUrl = "http://localhost:5000/api/projects"

  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.apiUrl);
  }

  filterProjectById(options: any): Observable<Project[]> {
    return this.httpClient.post<Project[]>(this.apiUrl+'/filter=id', options, httpOptions);
  }

  getProject(id: number): Observable<Project> {
    return this.httpClient.get<Project>(this.apiUrl+`/${id}`);
  }

  addProject(project: Project) {
    return this.httpClient.post(this.apiUrl, project, httpOptions);
  }

  updateProject(id: number, project: Project) {
    return this.httpClient.put(this.apiUrl+`/${id}`, project, httpOptions);
  }

  updateProjectPartial(id: number, jsonPatch: any) {
    return this.httpClient.patch(this.apiUrl+`/${id}`, jsonPatch, httpOptions);
  }

  deleteProject(id: number) {
    return this.httpClient.delete(this.apiUrl+`/${id}`);
  }
}
