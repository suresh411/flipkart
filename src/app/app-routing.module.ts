import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
// import { SingleComponent } from './product/single/single.component';
import { CartComponent } from './product/cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SingleComponent } from './product/single/single.component';
// import { fk } from './fk/fk.module'



const routes: Routes = [
  {
    path: "",
    redirectTo: "menu",
    pathMatch: "full"
  },
 
  // {path:'header', component:HeaderComponent},
  // {path:'', component:MenuComponent},
  // {path:'products',component:ProductComponent},
  // {path:'single/:p',component:SingleComponent},
  // {path:'cart',component:CartComponent},
  // {path:'register',component:RegisterComponent},
  // {path:'login',component:LoginComponent},
  
  //  {
  //    path: "fk",
  //    loadChildren: "./fk/fk.module#FkModule"
  //  },

   {
    path: "fk",
    loadChildren: () => import('./fk/fk.module').then(m => m.FkModule)
  },
  {path:'products',component:ProductComponent},
  {path:'', component:MenuComponent},
  {path:'single/:p',component:SingleComponent},
  {path:'cart',component:CartComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

