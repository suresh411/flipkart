import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private route:Router) { 
    
  }

  myform= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.nullValidator])
  })
 
  profile={Email:"sur@gmail.com", Password:"sur"}
 
  onSubmit(){
     if(this.profile.Email !== this.myform.value.email){
       alert("plz enter email address")
     }else if(this.profile.Password !== this.myform.value.password){
       alert("plz enter correct password")
     }else{
       this.route.navigate(['/products'])
     }
     
  }

  contactMethods=[
    { id:1 , name:"suresh"},
    {id:2, name:"ganesh"}
  ];

  log(x){ console.log(x); }


  submit(f){
    console.log(f);
  }
  

 

 

  

  ngOnInit() {
  }

}
