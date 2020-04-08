import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: any = [];

  constructor(private homeService : HomeService) { }

  ngOnInit() {
    this.homeService.getProductos().subscribe(
      res => {
        this.productos = res;
      }, //console.log(res),
      err => console.error(err)
    );
  }

}
