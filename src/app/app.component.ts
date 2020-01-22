import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flipkart';
 
  carts= [];
  constructor(private product: ServiceService){
  }
 
  ngOnInit() {
    
  }
  




  


  
  
}
