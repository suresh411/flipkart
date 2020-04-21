import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Authservice } from '../auth/authservice';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cart=[]
  myform:FormGroup
  details:Observable<any[]>;
  // public db:AngularFireDatabase
  constructor( private product:ServiceService, public fb:FormBuilder,
    public db:AngularFireDatabase,private authservice:Authservice, private afAuth:AngularFireAuth) { 
    this.details=db.list('details').valueChanges();
    this.myform=this.fb.group({
      username:["",Validators.required],
      mobilenum:["",Validators.required]
    })
  }

  ngOnInit() {
    this.cart=Object.values(this.product.cart)
    
  }
  onSubmit(passwordResetEmail){
    this.db.list('details').push({username:this.myform.value.username,mobilenum:this.myform.value.mobilenum})
    this.myform.reset()
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
      
    

  }

}
