import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginService } from './services/login.service';
import { HomeService } from './services/home.service';
import { FilterPipe } from './pipes/filter.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VermasComponent } from './components/vermas/vermas.component';
import { CarritoComponent } from './components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FilterPipe,
    MenuComponent,
    ModalComponent,
    ProductosComponent,
    VermasComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
