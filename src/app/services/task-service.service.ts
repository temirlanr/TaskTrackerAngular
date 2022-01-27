import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json-patch+json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  readonly apiUrl = "http://localhost:5000/api/tasks"

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  getTasksByProjectId(projectId: number): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl+`/${projectId}`);
  }

  getTask(id: number): Observable<Task> {
    return this.httpClient.get<Task>(this.apiUrl+`/${id}`);
  }

  addTask(task: Task) {
    return this.httpClient.post(this.apiUrl, task, httpOptions);
  }

  updateTask(id: number, task: Task) {
    return this.httpClient.put(this.apiUrl+`/${id}`, task, httpOptions);
  }

  updateTaskPartial(id: number, jsonPatch: any) {
    return this.httpClient.patch(this.apiUrl+`/${id}`, jsonPatch, httpOptions);
  }

  deleteTask(id: number) {
    return this.httpClient.delete(this.apiUrl+`/${id}`);
  }
}
