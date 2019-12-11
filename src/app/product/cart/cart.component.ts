import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = {}
cartkeys = [];

  constructor(private product: ServiceService) { }

  ngOnInit() {
    this.cart = this.product.cart;
    this.cartkeys = this.product.cartkeys
  }

}
