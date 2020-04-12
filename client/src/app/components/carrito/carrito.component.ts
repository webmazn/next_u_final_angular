import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  detalles: any = [];
  total: number = 0;

  constructor() { }

  ngOnInit() {

    const local = localStorage.getItem('carritoProductos');
    if(local == undefined){
      console.log('carro vacio');
    }else{
      const carrito = JSON.parse(local);
      const cantidad = carrito.length;
      for(const items in carrito){
        //console.log(carrito[items].producto+"/"+carrito[items].cantidadProducto);
        const caracteristicas = {
          producto: carrito[items].producto,
          cantidad: carrito[items].cantidadProducto,
          subtotal: carrito[items].producto.precio * carrito[items].cantidadProducto
        };
        this.total += caracteristicas.subtotal;
        this.detalles.push(caracteristicas);
      }
      //this.detalles = carrito;
    }

  }

}
