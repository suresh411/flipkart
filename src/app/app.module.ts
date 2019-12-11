import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component';
// import { SingleComponent } from './product/single/single.component';
import { CartComponent } from './product/cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ServiceService } from './service.service'
import { MenuComponent } from './menu/menu.component'


;

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ProductComponent,
    // SingleComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
