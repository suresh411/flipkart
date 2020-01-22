import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartarray = [];
  total=0
   quatity=0
   delivery=0


  constructor(private product: ServiceService, private rout:ActivatedRoute) { }

  ngOnInit() {
    // this.cart = this.product.cart;
    // this.cartkeys = this.product.cartkeys;
    this.cartarray=Object.values(this.product.cart)
    this.subtotal()
    this.quanti()
    this.update()
    
    
  }

  subtotal(){
   this.total=0
    for (let i = 0; i < this.cartarray.length; i++) {
         this.total+=(this.cartarray[i].quantity*this.cartarray[i].price)
         this.quanti()
         
    }
  }
    remove(p){
      if(delete this.product.cart[p.id]){
        alert("Are you sure you want to remove this item?")
        this.cartarray=Object.values(this.product.cart)
      
        this.subtotal()
        this.update()
  
        this.quanti()
      }
    }
    update(){
      this.delivery=0
      if(this.total>30000){
        this.delivery=0
      }else{
        this.delivery=20
      }
    }

  

  quanti(){
    this.quatity=0
    for (let i = 0; i < this.cartarray.length; i++) {
      this.quatity+=(this.cartarray[i].quantity+0)
      this.cartarray=Object.values(this.product.cart)
      
    }

  }
  

  



  decrement(p){
    if(this.product.cart[p.id].quantity>1){
      this.product.cart[p.id].quantity-=1
    }else{
      delete this.product.cart[p.id]
    }
    this.cartarray=Object.values(this.product.cart)
    this.subtotal()
    this.quanti()
    this.update()

  }
  increment(p){
    if(this.product.cart[p.id].quantity>=1){
      this.product.cart[p.id].quantity+=1
        this.cartarray=Object.values(this.product.cart)
    this.subtotal()
    this.quanti()
    this.update()
    }

  }

}
