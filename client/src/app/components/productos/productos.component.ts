import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];
  filterProducto: any = '';
  showModal: boolean = false;
  detalles: any = [{
    imagen: 'aguacate.jps',
    nombre: 'aguacate',
    precio: 5,
    disponibles: 32
  }];

  constructor(private productosService : ProductosService) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
        this.detalles = res[0];
      }, //console.log(res),
      err => console.error(err)
    );
  }

  onModalProducto(mostrar, producto){
    this.showModal = mostrar;
    this.detalles = producto;
    //console.log(mostrar);
    //console.log(producto);
  }

}
