import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otherproduct',
  templateUrl: './otherproduct.component.html',
  styleUrls: ['./otherproduct.component.scss']
})
export class OtherproductComponent implements OnInit {
  @Input() data;
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  toDetails(name){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['product', name]));
  }

}
