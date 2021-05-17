import { Action } from "@ngrx/store";
import { ItemModel } from "../item.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const EDIT_INGREDIENT = 'EDIT_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
    constructor(public payload: ItemModel) { }
}

export class EditIngredient implements Action {
    readonly type = EDIT_INGREDIENT;
    constructor(public payload: { index: number, item: ItemModel }) { }
}

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;
    constructor(public payload: number) { }
}

export type ShopActionsType = AddIngredient | EditIngredient | DeleteIngredient