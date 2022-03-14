import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'http://api.openweathermap.org/data/2.5/weather? &appid=';
  key = '241656e1842ca34ea3b5c852ec0f7da4';
  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any>{
    return this.http.get(this.url + this.key + '&q=' + ciudad);
  }
}
