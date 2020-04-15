import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
//import { Producto } from '../models/Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost:3000';

  carrito: any = []

  constructor(private http: HttpClient) { }

  getProductos(): Observable <any>{
    return this.http.get(`${this.API_URI}/productos`);
  }

  setCarrito(carrito: any){
    console.log('enviamos el carrito');
    this.carrito = carrito;
    console.log(this.carrito);
  }

  getCarrito(){
    console.log('traemos el carrito');
    console.log(this.carrito);
  }

}
