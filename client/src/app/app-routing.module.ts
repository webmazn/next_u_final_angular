import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component'
import { VermasComponent } from './components/vermas/vermas.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'producto/ver/:id',
    component: VermasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
