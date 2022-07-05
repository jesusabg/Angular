import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private api = 'http://localhost:7071';

  constructor(private http:HttpClient) { }

  getAllTasks() {
    const path = `${this.api}/peliculas`;
    return this.http.get<Task[]>(path);
  }

  getTask(id: number) {
    const path = `${this.api}/peliculas/${id}`;
    return this.http.get<Task>(path);
  }

  createTask(task: Task) {
    const path = `${this.api}/peliculas`;
    return this.http.post(path, task);
  }

  updateTask(task: Task) {
    const path = `${this.api}/peliculas/${task.id}`;
    return this.http.put<Task>(path, task);
  }

  deleteTask(id: number) {
    const path = `${this.api}/peliculas/${id}`;
    return this.http.delete(path);
  }
}
