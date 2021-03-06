import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service'
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  detalles: any = [];
  total: number = 0;

  constructor(private carritoService: CarritoService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(this.loginService.getToken() == null){
      this.router.navigate(['/login']);
    }

    const local = localStorage.getItem('carritoProductos');
    if(local == undefined){
      console.log('carro vacio');
    }else{
      const carrito = JSON.parse(local);
      //const cantidad = carrito.length;
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

  pagarCarrito(){
    const local = localStorage.getItem('carritoProductos');
    if(local == undefined){
      console.log('carro vacio');
    }else{
      const carrito = JSON.parse(local);
      const total = carrito.length;
      for(const items in carrito){
        let id = carrito[items].producto.id;
        let disponibles = carrito[items].producto.disponibles;
        let cantidad = carrito[items].cantidadProducto;
        let actualizado = disponibles - cantidad;
        let acum = parseInt(items) + 1;
        console.log(`[${total}|${items}|${acum}] => ${id} : ${disponibles} - ${cantidad} = ${actualizado} `);
        this.carritoService.setActualizarDisponibles(id, actualizado).subscribe(
          res => {
            //this.productos = res;
            console.log(res);
            /*if( acum == total){
              console.log('termino todo...');
              localStorage.removeItem('carritoProductos');
              this.router.navigate(['/home']);
            }*/
          },
          err => console.error(err)
        );
      }
      localStorage.removeItem('carritoProductos');
      this.router.navigate(['/home']);
    }
  }

}
