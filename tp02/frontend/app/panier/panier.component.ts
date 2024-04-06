import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Select, Store } from '@ngxs/store';
import { CoffeeProduct } from '../model/CoffeeProduct';
import { DelToCart } from '../actions/cart.actions';
import { CardsState } from '../shared/cards-state';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(CardsState.getListeProduct) liste$!: Observable<CoffeeProduct[]>;

  ngOnInit() {}

  delContact(c: CoffeeProduct): void {
    this.store.dispatch(new DelToCart(c));
  }
}
