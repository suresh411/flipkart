import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FkRoutingModule } from './fk-routing.module';
import { MensComponent } from './mens/mens.component';
import { GirlsComponent } from './girls/girls.component';


@NgModule({
  declarations: [MensComponent, GirlsComponent],
  imports: [
    CommonModule,
    FkRoutingModule
  ]
})
export class FkModule { }
