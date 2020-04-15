import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { VermasComponent } from './components/vermas/vermas.component';
import { CarritoComponent  } from './components/carrito/carrito.component';
import { BandejaComponent } from './components/bandeja/bandeja.component';

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
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'bandeja',
    component: BandejaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
