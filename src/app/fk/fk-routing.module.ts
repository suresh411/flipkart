import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensComponent } from './mens/mens.component';
import { GirlsComponent } from './girls/girls.component';


const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "mens",
  //   pathMatch: "full"
  // },
  // {
  //   path: "",
  //   redirectTo: "kids",
  //   pathMatch: "full"
  // },
  {
    path: "kids",
    loadChildren: () => import('./kids/kids/kids.module').then(m => m.KidsModule)
  },

  {
    path : "mens",
    component : MensComponent
  },
  {
    path : "girls",
    component : GirlsComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FkRoutingModule { }
