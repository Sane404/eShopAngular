import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private httpService : HttpService) { }
  defaultDB;
  db;
  ngOnInit(): void {
    this.httpService.httpRequest().subscribe((data:any) => {
      this.defaultDB = data;
      this.db = [...data.laptops,...data.phones];
    });
  }
  phoneOnly(){
    this.db = this.defaultDB.phones;
  }
  laptopOnly(){
    this.db = this.defaultDB.laptops;
  }
  allProducts(){
    this.db = [...this.defaultDB.phones,...this.defaultDB.laptops];
  }
}
