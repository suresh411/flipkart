import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  imgsrc = "https://www.gr8bunch.com/wp-content/uploads/2018/11/dummy-product-600x400.png";
  imgsrc1="https://rukminim1.flixcart.com/image/150/150/jq5iky80/shoe/6/2/q/gc-2336116-42-woodland-camel-original-imafbz89jhk7u2wc.jpeg?q=70";
  imgsrc2="https://rukminim1.flixcart.com/flap/150/150/image/6e6beb0ab04a77f2.jpg?q=70";
  imgsrc3="https://rukminim1.flixcart.com/image/612/612/jasj6a80/perfume/h/h/r/50-original-eau-de-toilette-yardley-london-men-original-imafyahgwvfetpbp.jpeg?q=70";
  imgsrc4="https://rukminim1.flixcart.com/image/416/416/k2arbm80/perfume/m/t/9/125-club-edt-men-125-ml-eau-de-toilette-scuderia-ferrari-men-original-imafhnrpuh2zh2k6.jpeg?q=70";
  imgsrc5="https://rukminim1.flixcart.com/image/312/312/k1b1bbk0/mobile/7/y/v/oneplus-7t-hd1901-original-imafkwsykmpfmf3g.jpeg?q=70";
  imgsrc6="https://rukminim1.flixcart.com/image/452/542/jsaocy80/shoe/h/g/p/aa7406-400-10-nike-gym-blue-white-obsidian-hyper-cobalt-original-imaf9s4jffheshxp.jpeg?q=50";
  imgsrc7="https://rukminim1.flixcart.com/image/452/542/k0mqtu80/shoe/v/x/h/193261-9-puma-black-white-original-imafkdp2yrmzzdb5.jpeg?q=50";
  imgsrc8="https://rukminim1.flixcart.com/image/200/200/jxz0brk0/mobile/7/b/a/redmi-k20-na-original-imafgb4xesjtrzuu.jpeg?q=70";
  imgsrc9="https://rukminim1.flixcart.com/image/200/200/k2jbyq80pkrrdj/mobile-refurbished/t/z/g/z1pro-128-u-1951-pd1911f-ex-vivo-6-original-imafhmyayxdjghhm.jpeg?q=70";
  imgsrc10="https://rukminim1.flixcart.com/image/200/200/jskofww0/mobile/3/u/t/mi-redmi-note-7-pro-na-original-imafe4bddnr7n5vb.jpeg?q=70";
  imgsrc11="https://rukminim1.flixcart.com/image/200/200/jmz7csw0/computer/v/u/q/hp-na-laptop-original-imaf9zypsgmfz4zk.jpeg?q=70";
  imgsrc12="https://rukminim1.flixcart.com/image/200/200/jmthle80-1/iron/f/4/y/philips-gc-1011-gc-1011-original-imaf9n9jxmbzxzfn.jpeg?q=70";
  imgsrc13="https://rukminim1.flixcart.com/flap/50/50/image/a03170cbadc94802.jpg?q=50";
1
  categories = [
    {cat_id:"c1",cat_name:"Watches",cat_colour:"blue"},
    {cat_id:"c2",cat_name:"Shoes",cat_colour:"black"},
    {cat_id:"c3",cat_name:"Perfumes",cat_colour:"white"},
    {cat_id:"c4",cat_name:"Mobiles",cat_colour:"green"},
]

  products = {
    perfumes:[
        {id:123,name:"Ferrari",price:6500,brand:"Ferrari",category:"c3",image:this.imgsrc4},
        {id:124,name:"Yardley",price:3500,brand:"yardley-london",category:"c3",image:this.imgsrc3}
    ],
    watches:[{id:125,name:"Diesel",price:1000,brand:"Diesel",category:"c1",image:this.imgsrc2}],
    mobiles:[{id:126,name:"oneplus 7",price:70000,brand:"oneplus",category:"c4",image:this.imgsrc5}],
    shoes:[
        {id:127,name:"Nike",price:4800,brand:"Nike",category:"c2",image:this.imgsrc6},
        {id:128,name:"Puma",price:7500,brand:"Nike",category:"c2",image:this.imgsrc7},
        

    ]
  }


  suresh=[
    {id:11,name:"Mi k20",price:20000,brand:"xiaomi",image:this.imgsrc8},
{id:12,name:"Vivo",price:12000,brand:"vivo",image:this.imgsrc9},
{id:13,name:"Oppo",price:16999,brand:"oppo",image:this.imgsrc10},
{id:14,name:"Hp",price:19999,brand:"realme",image:this.imgsrc11},
{id:15,name:"Bajaj",price:9999,brand:"xiaomi",image:this.imgsrc12},

]
  getMobs(){
    return this.suresh;
}

  allproducts = [];
 
    cartkeys = [];
    cart = {};

  constructor() { }
  getCats(){
    return this.categories;
}






getPros(){
    this.allproducts = [];
    for(let x in this.products){
        for(let y in this.products[x]){
            // console.log(this.products[x][y]);
            this.allproducts.push(this.products[x][y])
        }
        // console.log(this.products[x]);
    }
     return this.allproducts;
}




getMyPros(cat: string){
    // console.log(cat);
    // console.log(this.products[cat]);
    return this.products[cat];
}


}

