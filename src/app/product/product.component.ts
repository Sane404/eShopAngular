import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data;
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }
  check(data){
    console.log(data);
  }
  toDetails(name){
    // let parsed_name = name.split(' ').join('_');
    this.router.navigate(['product', name]);
  }
}
