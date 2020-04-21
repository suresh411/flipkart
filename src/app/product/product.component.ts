  import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  mobiles=[]

  constructor(private servicve: ServiceService, private route:Router) { }

  ngOnInit() {
    // this.mobiles=this.servicve.mobiles;
    this.mobiles=this.servicve.getPros().concat(this.servicve.mobiles)
  }
  // getProducts(){
  //   // console.log(this.product.getPros());
  //   return this.servicve.getPros();
  // }

x:any;
  addToCart(p:any){
    if(this.servicve.cart.hasOwnProperty(p.id)){
      this.x=this.servicve.cart[p.id]["quantity"] +=1 
      
    }else{
      this.servicve.cart[p.id] = p;
      

      
    }
  }
 
 
  

}


