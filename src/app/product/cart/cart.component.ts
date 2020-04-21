import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
// import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';


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
  details: Observable<any[]>;
  user: any;
  showhide: boolean;
  // public db:AngularFireDatabase

  constructor(private product: ServiceService, private rout:ActivatedRoute,public db:AngularFireDatabase) { 
    this.details=db.list('details').valueChanges();
    this.details.subscribe(data =>{
      console.log("data........",data)
    })
    // console.log("dataa...." ,this.details.subscribe(data =>))
  }

  ngOnInit() {
    // this.cart = this.product.cart;
    // this.cartkeys = this.product.cartkeys;
    this.cartarray=Object.values(this.product.cart)
    this.subtotal()
    this.quanti()
    this.update()
    // this.product.cartCount.emit(this.quatity);
    // const user=JSON.parse(localStorage.getItem('user'));
    // console.log(user.email)
    // this.user =user
    // if(user.email !==null){
    //   this.showhide=true
    // }else{
    //   this.showhide=false
    // }
    
    
  }

  subtotal(){
   this.total=0
    for (let i = 0; i < this.cartarray.length; i++){
         this.total+=(this.cartarray[i].quantity*this.cartarray[i].price)
         this.quanti()
         
    }
  }
    remove(p){
      if(delete this.product.cart[p.id]){
        // this.product.cart[p.id].quantity=0
        alert("Are you sure you want to remove this item?")
        this.cartarray=Object.values(this.product.cart)
        // this.product.cartCount.emit(this.quatity);
        console.log(p)
      
        this.subtotal()
        this.update()
  
        this.quanti()
      this.product.cartCount.emit(this.quatity);

      }
    }
    update(){
      this.delivery=0;
      if(this.total>30000){
        this.delivery=0
      }else{
        this.delivery=20
      }
    }

  

  quanti(){
    this.quatity=0
    for (let i = 0; i < this.cartarray.length; i++) {
      this.quatity+=(this.cartarray[i].quantity)
      this.cartarray=Object.values(this.product.cart)
      // localStorage.setItem('rituls', JSON.stringify(this.quatity))
      this.product.cartCount.emit(this.quatity);

      
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
