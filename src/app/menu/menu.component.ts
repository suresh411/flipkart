import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mobile=[];
  mobiles=[];
  mo=[]
  
  
 
    

  constructor(private servicve: ServiceService) { 
    

    
  }

  ngOnInit() {
    this.mobile=this.servicve.getMobs();
    this.mobiles=this.servicve.mobiles.slice(0,6,);
    // this.mo=this.mobiles.splice(4,0)
    
    
    console.log(this.mobiles)
    console.log(this.servicve.mobiles)
    
    // for (let i = 6; i < this.servicve.mobiles.length; i++) {
    //   this.mobiles[i]=this.servicve.mobiles[i]
      
    // }
    
    
  }
  
  
  
  addToCart(m:any){
    if(this.servicve.cart.hasOwnProperty(m.id)){
      this.servicve.cart[m.id]["quantity"] = this.servicve.cart[m.id]["quantity"]+1;
      this.servicve.cart[m.id]["total"] = this.servicve.cart[m.id]["quantity"]*m.price;
    }else{
      this.servicve.cart[m.id] = m;
      this.servicve.cartkeys.push(m.id);
    }
  }

}
