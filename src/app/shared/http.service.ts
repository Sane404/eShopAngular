import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  httpRequest(){
    return this.http.get(`https://test-faa93-default-rtdb.firebaseio.com/products.json`);
  }
}
