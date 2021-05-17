
import { Action } from "@ngrx/store";
import { ItemModel } from "../item.model";
import * as ShopActions from "./shop.actions"

export interface State {
    items: ItemModel[];
}


const initialState = {
    items: [
        new ItemModel("Pomodoro", 4),
        new ItemModel("Parmesano", 3)
    ]
};
export function shoppingListReducer(state = initialState, action: ShopActions.ShopActionsType) {
    switch (action.type) {
        case ShopActions.ADD_INGREDIENT:
            return {
                //copy old state
                ...state,
                items: [...state.items, action.payload]
            };
        case ShopActions.EDIT_INGREDIENT:
            const itemDup = [...state.items];
            itemDup[action.payload.index] = action.payload.item
            return {
                //copy old state
                ...state,
                items: itemDup
            };

        case ShopActions.DELETE_INGREDIENT:
            const itemDel = [...state.items];
            return {
                //copy old state
                ...state,
                items: itemDel.filter((it, index) => {
                    return index !== action.payload
                })
            };
        default:
            return state;
    }
}