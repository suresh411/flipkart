// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';
// import { ServiceService } from 'src/app/service.service';

// @Component({
//   selector: 'app-single',
//   templateUrl: './single.component.html',
//   styleUrls: ['./single.component.css']
// })
// export class SingleComponent implements OnInit {
//   category = "";
//   colour = "";
//   size = "";

//   constructor(private routeData: ActivatedRoute, private serv: ServiceService) { }

  
//   ngOnInit() {
//     this.category = this.routeData.snapshot.params['cat'];
//     this.colour = this.routeData.snapshot.queryParams['colour'];
//     this.size = this.routeData.snapshot.queryParams['size'];
//     this.routeData.params.subscribe(
//       (p: Params) => {
//         this.category = p['cat'];
//       }
//     )
//     this.routeData.queryParams.subscribe(
//       (q: Params) => {
//         this.colour = q['colour'];
//         this.size = q['size'];
//       }
//     );
//     // console.log(this.routeData.snapshot.params['cat']);
//   }
//   getMycategories(){
//     // console.log(this.category);
//     // console.log("test");
//     // console.log(this.serv.getMyPros(this.category));
//     return this.serv.getMyPros(this.category);
//   }

//   addToCart(p:any){
//     if(this.serv.cart.hasOwnProperty(p.id)){
//       this.serv.cart[p.id]["quantity"] = this.serv.cart[p.id]["quantity"]+1;
//       this.serv.cart[p.id]["total"] = this.serv.cart[p.id]["quantity"]*p.price;
//     }else{
//       this.serv.cart[p.id] = {quantity:1,name:p.name,price:p.price,total:p.price};
//       this.serv.cartkeys.push(p.id);
//     }
//   }


// }
