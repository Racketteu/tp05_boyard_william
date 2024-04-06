import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiproductService } from '../apiproduct.service';
import { CoffeeProduct } from '../model/CoffeeProduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltrageComponent } from '../filtrage/filtrage.component';
import { Store } from '@ngxs/store';
import { AddToCart } from '../actions/cart.actions';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  imports: [CommonModule, FormsModule, FiltrageComponent],
  standalone: true
})

export class ListeComponent implements OnInit {
  coffeeProducts!: Observable<CoffeeProduct[]>;
  filteredProducts: CoffeeProduct[] = [];

  constructor(private apiService: ApiproductService, private store: Store) { }

  ngOnInit() {
    this.apiService.coffeeProductsFiltered.subscribe(filteredProducts => {
      this.filteredProducts = filteredProducts;
    });
  }

  AddToCart(product: CoffeeProduct) {
    this.store.dispatch(new AddToCart(product));
  }
}
