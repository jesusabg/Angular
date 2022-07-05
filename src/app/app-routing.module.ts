import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasListComponent } from './peliculas-list/peliculas-list.component';
import { PeliculasformComponent } from './peliculasform/peliculasform.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/peliculas',
    pathMatch: 'full'
  },
  {
     path: 'peliculas',
    component: PeliculasListComponent
  },
  {
    path: 'peliculas/add',
    component: PeliculasformComponent
  },
  {
    path: 'peliculas/edit/:id',
    component:PeliculasformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
