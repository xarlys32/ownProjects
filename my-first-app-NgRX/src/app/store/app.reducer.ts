import { ActionReducerMap } from "@ngrx/store";
import * as fromShoppingListReducer from "../shop/store/shop.reducer";

export interface AppState {
    shopList: fromShoppingListReducer.State
}

export const appReducer: ActionReducerMap<AppState> = {
    shopList: fromShoppingListReducer.shoppingListReducer
}
