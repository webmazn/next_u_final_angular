import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];
  filterProducto: any = '';
  carrito: any = [];

  constructor( private productosService: ProductosService, private router: Router, private menuService: MenuService) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
    );
  }

  verProducto(id: string){
    //console.log(id);
    this.router.navigate(['/producto/ver/', id]);
  }

  agregarProducto(event: any, producto: any){
    const boton = event.target;
    const cantidadProducto = boton.nextSibling.value;

    this.carrito = (localStorage.getItem('carritoProductos') == undefined) ? this.carrito : JSON.parse(localStorage.getItem('carritoProductos'));

    const productoCantidad = {cantidadProducto: cantidadProducto, producto: producto};
    if(this.carrito.length>0){
      let posicion = '';
      for(const detalle in this.carrito){
        if(this.carrito[detalle].producto.id == producto.id){
          posicion = detalle;
        }
      }
      if(posicion==''){
        this.carrito.push(productoCantidad);
      }else{
        this.carrito[posicion].cantidadProducto = cantidadProducto;
      }
    }else{
      this.carrito.push(productoCantidad);
    }

    localStorage.setItem('carritoProductos', JSON.stringify(this.carrito));
    this.menuService.actualizarCarrito(true, this.carrito.length);
  }

}
