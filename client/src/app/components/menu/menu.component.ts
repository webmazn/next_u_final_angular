import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { LoginService} from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  carrito: any = [];

  constructor(private menuService: MenuService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    const local = localStorage.getItem('carritoProductos');
    if(local == undefined){
      this.carrito = this.menuService.actualizarCarrito(false, 0);
    }else{
      const storage = JSON.parse(local);
      const cantidad = storage.length;
      this.carrito = this.menuService.actualizarCarrito(true, cantidad);
    }
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
