import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cart=[]
  constructor( private product:ServiceService) { }

  ngOnInit() {
    this.cart=Object.values(this.product.cart)
    
  }

}
