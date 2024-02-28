import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { ProdcutsPageComponent } from './pages/store/prodcuts-page/prodcuts-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { SingUpPageComponent } from './pages/account/sing-up-page/sing-up-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';

const routes: Routes = [
  {
    //aqui configuro a rota
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: ProdcutsPageComponent },
      { path: 'cart', component: CartPageComponent },
    ],
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [{ path: 'pets', component: PetsPageComponent }],
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SingUpPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
