import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URI}/productos`);
  }

  /*
  getProducto(){
    return this.http.get(`${this.API_URI}/producto/${id}`):
  }
  */
}
