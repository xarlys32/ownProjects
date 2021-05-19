import { ActionReducerMap } from "@ngrx/store";
import * as fromShoppingListReducer from "../shop/store/shop.reducer";
import * as fromAuthReducer from "../auth/store/auth.reducer"

export interface AppState {
    shopList: fromShoppingListReducer.State
    authList: fromAuthReducer.State
}

export const appReducer: ActionReducerMap<AppState> = {
    shopList: fromShoppingListReducer.shoppingListReducer,
    authList: fromAuthReducer.authReducer
}
