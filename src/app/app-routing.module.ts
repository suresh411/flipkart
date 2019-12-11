import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
// import { SingleComponent } from './product/single/single.component';
import { CartComponent } from './product/cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
 
 // {path:'header', component:HeaderComponent},
  {path:'', component:MenuComponent},
  {path:'products',component:ProductComponent},

  // {path:'products/:cat',component:SingleComponent},
 
  
  {path:'cart',component:CartComponent},
  
  
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

