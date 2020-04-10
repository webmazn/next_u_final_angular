import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VermasService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProducto(id: string){
    return this.http.get(`${this.API_URI}/producto/${id}`);
  }

}
