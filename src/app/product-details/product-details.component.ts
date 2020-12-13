import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute} from '@angular/router';
import { LocalService } from '../shared/local.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private http:HttpService,private route:ActivatedRoute,private ls:LocalService) { }
  db;
  shuffledDB;
  currentItem:any;
  quantity:number[] = [1,2,3,4,5];
  name:string;
  DISABLE_ADD_TO_CART:boolean = false;
  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.http.httpRequest().subscribe((data:any) =>{
      this.db = [...data.laptops,...data.phones];
      this.currentItem = this.db.find(({name}) => name === this.name);
      let index = this.db.indexOf(this.currentItem);
      this.shuffledDB = this.db;
      this.shuffledDB.splice(index,1);
      this.shuffledDB.sort(() => Math.random() - 0.5);
      this.shuffledDB.splice(6,2);
    });
  }
  addToCart(quantity){
    let storage = this.ls.getItem();
    if(storage){
      let exists = storage.find(({name}) => this.currentItem.name == name);
      if(exists){
        alert('already in cart');
      }else{
        let item = this.currentItem;
        item.quantity = +quantity;
        this.ls.setItem(item);
      }
      
    }else{
      let item = this.currentItem;
      item.quantity = +quantity;
      this.ls.setItem(item);
    }
  }
  switcher(e){
    let more_prods = <any>document.querySelector('.more_products_wrap');
    let container = <any>document.querySelector('.container');
    more_prods.classList.toggle('hidden');
    container.classList.toggle('grow');
    if(container.classList.contains('grow')){
      e.target.innerText = "Show other products";
    }else{
      e.target.innerText = "Hide other products";
    }
  }
}
