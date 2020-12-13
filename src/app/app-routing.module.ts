import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../app/homepage/homepage.component';
import { ShopComponent } from '../app/shop/shop.component';
import { ProductDetailsComponent } from '../app/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component: HomepageComponent},
  {path:'shop',component: ShopComponent},
  {path:'product/:name',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
