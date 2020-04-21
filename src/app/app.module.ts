import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component';
import { SingleComponent } from './product/single/single.component';
import { CartComponent } from './product/cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ServiceService } from './service.service'
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
// import { AngularFireModule, FirebaseOptionsToken } from '@angular/fire';
import { firebase } from '../environments/firebase';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { Authservice } from './auth/authservice';


;

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ProductComponent,
    SingleComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    
    
  ],
  providers: [ServiceService,Authservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
