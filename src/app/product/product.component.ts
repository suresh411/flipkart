  import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private servicve: ServiceService) { }

  ngOnInit() {
  }
  getProducts(){
    // console.log(this.product.getPros());
    return this.servicve.getPros();
  }
  addToCart(p:any){
    if(this.servicve.cart.hasOwnProperty(p.id)){
      this.servicve.cart[p.id]["quantity"] +=1 
      
    }else{
      this.servicve.cart[p.id] = p;
      
    }
  }

}


