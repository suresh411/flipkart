import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mobile=[];
  mobiles=[
    {id:1, brand:"mi"},
    {id:2, brand:"realme"},
    {id:3, brand:"oppo"},
    {id:4, brand:"samsung"},
    {id:5, brand:"vivo"},
    {id:6, brand:"lenovo"}
    ];


  constructor(private servicve: ServiceService) { 
    

    
  }

  ngOnInit() {
    this.mobile=this.servicve.getMobs();
    
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
