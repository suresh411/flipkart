import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  
 

  constructor(private routeData: ActivatedRoute, private serv: ServiceService) { }

  singleitem:any;
  single={}
 
  
  ngOnInit() {
    for (const key in this.serv.mobiles){
        this.single[this.serv.mobiles[key].id]=this.serv.mobiles[key]}


    this.routeData.params.subscribe((p)=>
    this.singleitem=this.single[p.p])
    
  }

addToCart(p:any){
    if(this.serv.cart.hasOwnProperty(p.id)){
      this.serv.cart[p.id]["quantity"] = this.serv.cart[p.id]["quantity"]+1;
      
    }else{
      this.serv.cart[p.id] = p
      this.serv.cartkeys.push(p.id);
    }
  }

  
            



}
