import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobile=[];

  
  constructor(private servicve: ServiceService){
  }
 
  ngOnInit(){
    this.mobile=this.servicve.getMobs();
    
  }

  addToCart(m:any){
    if(this.servicve.cart.hasOwnProperty(m.id)){
      this.servicve.cart[m.id]["quantity"] = this.servicve.cart[m.id]["quantity"]+1;
      this.servicve.cart[m.id]["total"] = this.servicve.cart[m.id]["quantity"]*m.price;
    }else{
      this.servicve.cart[m.id] = {quantity:1,name:m.name,price:m.price,total:m.price};
      this.servicve.cartkeys.push(m.id);
    }
  }
  

}
  
