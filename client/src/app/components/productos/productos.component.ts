import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router'

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
    imagen: 'aguacate.jpg',
    nombre: 'aguacate',
    precio: 5,
    disponibles: 32
  }];

  constructor(private productosService : ProductosService, private router: Router) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
        this.detalles = res[0];
      }, //console.log(res),
      err => console.error(err)
    );
  }

  verProducto(id: string){
    //console.log(id);
    this.router.navigate(['/producto/ver/', id]);
  }

}
