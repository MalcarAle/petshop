import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SingUpPageComponent } from './pages/account/sing-up-page/sing-up-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ProdcutsPageComponent } from './pages/account/store/prodcuts-page/prodcuts-page.component';
import { CartPageComponent } from './pages/account/store/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SingUpPageComponent,
    PetsPageComponent,
    ProdcutsPageComponent,
    CartPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
