import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart>;

  constructor(private shoppingCart: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCart.getCart();
  }

  clearCart() {
    this.shoppingCart.clearCart();
  }
}
