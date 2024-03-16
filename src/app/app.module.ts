import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SingUpPageComponent } from './pages/account/sing-up-page/sing-up-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ProdcutsPageComponent } from './pages/store/prodcuts-page/prodcuts-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FramePageComponent,
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SingUpPageComponent,
    PetsPageComponent,
    ProdcutsPageComponent,
    CartPageComponent,
    ProductCardComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
