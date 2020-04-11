import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];
  filterProducto: any = '';
  cantidad: number = 1;
  carrito: any = [];

  @ViewChild('menu',{static: false}) childMenu: MenuComponent;

  constructor(
    private productosService: ProductosService,
    private router: Router) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
      }, //console.log(res),
      err => console.error(err)
    );
  }

  verProducto(id: string){
    //console.log(id);
    this.router.navigate(['/producto/ver/', id]);
  }

  agregarCarrito(id: string){
    //console.log(id+"+"+this.cantidad);
    const productoCantidad = {idProducto: id, cantidadProducto: this.cantidad};
    //this.carrito.push(productoCantidad);
    if(this.carrito.length>0){
      let posicion = '';
      for(const detalle in this.carrito){
        //console.log(detalle+"+"+this.carrito[detalle].idProducto);
        if(this.carrito[detalle].idProducto == id){
          posicion = detalle;
        }
      }
      if(posicion==''){ //console.log('agrego del for');
        this.carrito.push(productoCantidad);
      }else{ //console.log('actualizo posicion');
        this.carrito[posicion].cantidadProducto = this.cantidad;
      }
    }else{ //console.log('agrego directo');
      this.carrito.push(productoCantidad);
    }

    this.childMenu.showCantidad = true;
    this.childMenu.cantidadCarrito = this.carrito.length;
    //console.log(this.carrito);
    //console.log(this.carrito.length);
  }

  cantidadProductos(event: any){
    this.cantidad = event.target.value;
  }

}
