import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoysComponent } from './boys/boys.component';
import { LadiesComponent } from './ladies/ladies.component';


const routes: Routes = [
  {
    path:"boys",
    component:BoysComponent
  },
  {path:"ladies", component:LadiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
