import { Component, OnInit, SimpleChanges, SimpleChange } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Observable } from 'rxjs';
import { setupTestingRouter } from '@angular/router/testing';
import { Authservice } from '../auth/authservice';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  cartarray=[]
  quatity=0
  user:any
  showhide: boolean;
  
  constructor(private service: ServiceService, private authService:Authservice,private afAuth:AngularFireAuth, private router:Router){
  }
  logout(){
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
      this.showhide = false;
    })
  }
 
  ngOnInit(){
    this.cartarray=Object.values(this.service.cart);
    // this.user=localStorage.getItem('rituls');
    // console.log(this.user)
    this.service.cartCount.subscribe(data =>{
      console.log('data' , data)
    this.quatity = data
   })
    this.quantity();
    // const user=JSON.parse(localStorage.getItem('user'));
    // console.log(user.email)
    // this.user =user
    // if(user.email !==null){
    //   this.showhide=true
    // }else{
    //   this.showhide=false
    // }
  }

  quantity(){
    this.quatity=0
    for (let i = 0; i < this.cartarray.length; i++){
      this.quatity+=(this.cartarray[i].quantity+0)
      this.cartarray=Object.values(this.service.cart)
      // localStorage.getItem('rituls')
      // this.service.cartCount.emit(this.quatity);
      
    }

  }
  ngOnChanges(changes: SimpleChange): void {
    console.log(changes)
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

  

}
  
