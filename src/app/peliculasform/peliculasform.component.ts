import { Component, HostBinding, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-peliculasform',
  templateUrl: './peliculasform.component.html',
})
export class PeliculasformComponent implements OnInit {

  @HostBinding('class') classes = 'row'

  movie: Task = {
    titulo: '',
    puntuacion: 0,
    id: 0
  };

  edit:boolean = false;

  constructor(private TaskService: TaskService, private router: Router, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params['id']) {
        this.TaskService.getTask(params['id'])
        .subscribe(
          {
            next: (response) => {
              this.movie = response;
              this.edit = true;
            },
            error: (error) => {
              console.log(error);
            },
          }
        )
    }
  }

  onSubmit() {
    if(this.edit == true){
      this.updateMovie();
    }else{
      this.saveMovie();
    }
    
  }

  updateMovie(){
    this.TaskService.updateTask(this.movie)
    .subscribe(
      {
        next: (response) => {
          this.router.navigate(['/peliculas']);
        },
        error: (error) => {
          console.log(error);
        },
      }
    );
  }

  saveMovie() {
    this.TaskService.createTask(this.movie).subscribe(
      {
        next: (response) => {
          this.router.navigate(['/peliculas']);
        },
        error: (error) => {
          console.log(error);
        },
      }
    );
  }

}
