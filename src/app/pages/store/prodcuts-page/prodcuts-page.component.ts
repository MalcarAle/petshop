import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-prodcuts-page',
  templateUrl: './prodcuts-page.component.html',
})
export class ProdcutsPageComponent implements OnInit {
  public products$!: Observable<Product[]>;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.products$ = this.data.getProducts();
  }
}
