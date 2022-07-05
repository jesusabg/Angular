import { Component, HostBinding, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';
@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
})
export class PeliculasListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  constructor(private taskServie:TaskService) { }

  movies:Task[] = [{
    titulo:'',
    // anio:0,
    puntuacion:0,
    id:0
  }];
  
  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.taskServie.getAllTasks().subscribe(
      {
       next: (response) => {         
         this.movies =response         
       },
       error: (error) => {
        console.log(error);       
       },
      }
     );
  }

  deleteMovie( id:number ){
    this.taskServie.deleteTask(id).subscribe(
      {
       next: (response) => {         
         this.getGames();         
       },
       error: (error) => {
        console.log(error); 
       },
      }
     );
  }

}
