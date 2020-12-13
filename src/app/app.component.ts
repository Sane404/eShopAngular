import { Component } from '@angular/core';
import {LocalService } from './shared/local.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ls:LocalService){}
  title = 'eShop';
  amountOFItems:number;
  get amount(){
    let array = this.ls.getItem();
    if(!array){
      return 0;
    }else{
    let total = 0;
    array.forEach(element => {
      total += element.quantity;
    });
    return total;
    }
  }
}
