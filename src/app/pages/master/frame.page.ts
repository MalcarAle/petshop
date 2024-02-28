import { Component } from '@angular/core';

//Aqui fica fixado para todas as rotas
@Component({
  selector: 'app-frame-page',
  template: '<app-navbar></app-navbar><router-outlet></router-outlet>',
})
export class FramePageComponent {}
