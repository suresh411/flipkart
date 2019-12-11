import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contactMethods=[
    { id:1 , name:"suresh"},
    {id:2, name:"ganesh"}
  ];

  log(x){ console.log(x); }


  submit(f){
    console.log(f);
  }
  

 

 

  constructor() { 
    
  }

  ngOnInit() {
  }

}
