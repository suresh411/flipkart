import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flipkart';
  cart = {};
  cartkeys = [];
  constructor(private product: ServiceService){
  }
  getCategories(){
    return this.product.getCats();
  }
  
  
}
