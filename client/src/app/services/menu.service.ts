import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  carrito: any = {};

  constructor() { }

  actualizarCarrito(show: boolean = false, cantidad: number = 0){
    this.carrito['showCantidad'] = show;
    this.carrito['cantidadCarrito'] = cantidad;
    return this.carrito;
  }

}
