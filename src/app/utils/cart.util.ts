import { CartItem } from '../models/cart-item.model';
import { Cart } from '../models/cart.model';

export class CartUtil {
  public static get(): Cart {
    //recuperando dados do localStorage
    const data = localStorage.getItem('petshopcart');

    //caso nao haja dados, retorna um novo carrinho
    if (!data) {
      return new Cart();
    }

    //caso haja dados, retorna o carrinho
    return JSON.parse(data);
  }

  public static add(
    id: string,
    product: string,
    quantity: number,
    price: number,
    image: string
  ) {
    //Obtem o carrinho
    let cart = this.get();

    //Gera o novo item
    const item = new CartItem(id, product, quantity, price, image);

    //adiciona ao carrinho
    cart.items.push(item);

    //Salva no localStorage
    localStorage.setItem('petshopcart', JSON.stringify(cart));
  }

  public static update(cart: Cart) {
    //salva no localStorage
    localStorage.setItem('petshopcart', JSON.stringify(cart));
  }

  public static clear() {
    //remove os itens do localStorage
    localStorage.removeItem('petshopcart');
  }
}
