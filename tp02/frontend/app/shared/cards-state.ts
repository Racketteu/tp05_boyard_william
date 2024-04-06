import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { AddToCart, DelToCart } from '../actions/cart.actions';
import { CardsStateModel } from './cards-state-model';
import { CoffeeProduct } from '../model/CoffeeProduct';

@State<CardsStateModel>({
  name: '',
  defaults: {
    CoffeeProduct: [],
  },
})

@Injectable()
export class CardsState {
  @Selector()
  static getNbProduct(state: CardsStateModel) {
    return state.CoffeeProduct.length;
  }
  @Selector()
  static getListeProduct(state: CardsStateModel) {
    return state.CoffeeProduct;
  }

  @Action(AddToCart)
  add(
    { getState, patchState }: StateContext<CardsStateModel>,
    { payload }: AddToCart
  ) {
    const state = getState();
    patchState({
        CoffeeProduct: [...state.CoffeeProduct, payload],
    });
  }

  @Action(DelToCart)
  del(
    { getState, patchState }: StateContext<CardsStateModel>,
    { payload }: DelToCart
  ) {
    const state = getState();
    patchState({
        CoffeeProduct: state.CoffeeProduct.filter(
        (x) => !(payload.name == x.name)
      ),
    });
  }
}
