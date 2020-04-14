import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  setActualizarDisponibles(id: string, disponible: string|number): Observable <any>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.API_URI}/producto/${id}/${disponible}`, '');
  }

}
