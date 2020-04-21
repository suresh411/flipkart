import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Authservice } from '../auth/authservice';
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private route:Router, private ser:ServiceService,private as:AngularFireAuth , public authService: Authservice) { 
   console.log(as.user)
   this.as.authState.subscribe(user => {
     console.log("user",user)
     
   })
    
  }

  myform= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.nullValidator])
  })
  forgot(){
    
  }
 
  
 
  onSubmit(){
     if(this.ser.profile.Email !== this.myform.value.email){
       alert("plz enter email address")
     }else if(this.ser.profile.Password !== this.myform.value.password){
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
    this.ser.my=this.myform
  }

}
