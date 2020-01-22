import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  cartarray=[]
  quatity=0
  constructor(private service: ServiceService){
  }
 
  ngOnInit(){
    this.cartarray=Object.values(this.service.cart)
    this.quanti();
  }

  quanti(){
    this.quatity=0
    for (let i = 0; i < this.cartarray.length; i++) {
      this.quatity+=(this.cartarray[i].quantity+0)
      this.cartarray=Object.values(this.service.cart)
      
    }

  }

  

}
  
