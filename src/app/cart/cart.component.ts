import { Component, OnInit } from '@angular/core';
import { LocalService } from '../shared/local.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  order;
  total_price;
  constructor(private ls:LocalService) { }

  ngOnInit(): void {
    this.order = this.ls.getItem();
  }
  less(item){
    item.quantity -= 1;
    let index = this.order.indexOf(item);
    this.ls.overwriteItem(item,index);
    if(item.quantity == 0){
      this.order.splice(index,1);
      this.ls.removeItem(index);
    }
  }
  more(item){
    item.quantity += 1;
    let index = this.order.indexOf(item);
    this.ls.overwriteItem(item,index);
  }
  get total(){
    let total = 0;
    if(!this.order){
      return total;
    }else{
    this.order.forEach(element => {
      total += element.price * element.quantity;
    });
    this.total_price = total;
    return total;
    }
  }
  orderEnd(){
    let order = '';
    console.log(this.order);
    
    if(this.order == undefined || this.order.length == 0  ){
      alert('Your cart is empty :(');
    }else{
      this.order.forEach(element => {
        order += `${element.name} x ${element.quantity} \n`;
      });
      order += `\n Total price is : ${this.total_price} $`;
      alert(order);
      this.order = this.ls.storageClear();
    }
    

  }
}
