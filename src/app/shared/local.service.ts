import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  storage = [];
  constructor() { }
  setItem(item){
    let local_storage = this.getItem();
    if(local_storage){
      local_storage.push(item);
      localStorage.setItem("Order",JSON.stringify(local_storage));
    }else{
      this.storage.push(item);
      localStorage.setItem("Order",JSON.stringify(this.storage));
    }
  }
  getItem(){
    return JSON.parse(localStorage.getItem("Order"));
  }
  overwriteItem(item,index){
    let local_storage = this.getItem();
    local_storage[index] = item;
    localStorage.setItem("Order",JSON.stringify(local_storage));
  }
  removeItem(index){
    let local_storage = this.getItem();
    local_storage.splice(index,1);
    localStorage.setItem("Order",JSON.stringify(local_storage));
  }
  storageClear(){
    return localStorage.setItem("Order",JSON.stringify([]));
  }
}
