import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../models/cart.model';
import { CartUtil } from '../../../utils/cart.util';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent implements OnInit {
  public cart: Cart = new Cart();

  constructor() {}

  ngOnInit() {
    this.loadCart();
  }

  public total() {
    let total = 0;
    this.cart.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }

  public loadCart() {
    this.cart = CartUtil.get();
  }

  public remove(item: any) {
    let index = this.cart.items.indexOf(item);
    this.cart.items.splice(index, 1);
    CartUtil.update(this.cart);
  }

  public clear() {
    CartUtil.clear();
    this.loadCart();
  }
}
