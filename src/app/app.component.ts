import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-first-project';

  constructor(private taskServie:TaskService) {
  }

}
