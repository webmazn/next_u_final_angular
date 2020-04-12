import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];
  filterProducto: any = '';
  cantidad: string = '1';
  carrito: any = [];

  constructor( private productosService: ProductosService, private router: Router, private menuService: MenuService) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
      }, //console.log(res);
      err => console.error(err)
    );
  }

  verProducto(id: string){
    //console.log(id);
    this.router.navigate(['/producto/ver/', id]);
  }

  agregarCarrito(id: string){
    this.carrito = (localStorage.getItem('carritoProductos') == undefined) ? this.carrito : JSON.parse(localStorage.getItem('carritoProductos'));
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
    //console.log(this.carrito);
    //localStorage.removeItem('carritoProductos');
    this.cantidad = '1';
    localStorage.setItem('carritoProductos', JSON.stringify(this.carrito));
    //console.log(localStorage.getItem('carritoProductos'));
    //const carro: any = JSON.parse(localStorage.getItem('carritoProductos'));

    this.productosService.setCarrito(this.carrito);
    //this.productosService.getCarrito();

    //console.log(this.carrito);
    //console.log(this.carrito.length);
    this.menuService.actualizarCarrito(true, this.carrito.length);
  }

  agregarProducto(producto: any){

    this.carrito = (localStorage.getItem('carritoProductos') == undefined) ? this.carrito : JSON.parse(localStorage.getItem('carritoProductos'));

    const productoCantidad = {producto: producto, cantidadProducto: this.cantidad};
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
        this.carrito[posicion].cantidadProducto = this.cantidad;
      }
    }else{
      this.carrito.push(productoCantidad);
    }
    this.cantidad = '1';
    localStorage.setItem('carritoProductos', JSON.stringify(this.carrito));
    //this.productosService.setCarrito(this.carrito);
    this.menuService.actualizarCarrito(true, this.carrito.length);
  }

  cantidadProductos(event: any){
    //console.log(event.target.value);
    this.cantidad = event.target.value;
    //console.log(this.cantidad)
  }

}
