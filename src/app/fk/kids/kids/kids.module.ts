import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';
import { BoysComponent } from './boys/boys.component';
import { LadiesComponent } from './ladies/ladies.component';


@NgModule({
  declarations: [BoysComponent, LadiesComponent],
  imports: [
    CommonModule,
    KidsRoutingModule
  ]
})
export class KidsModule { }
