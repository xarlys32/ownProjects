import { Injectable } from '@angular/core';
import { ItemModel } from './item.model';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {
    private listItem: ItemModel[] = [];

    getListItem(): Observable<any> {
        return of(this.listItem);
    }

    addItem(item: ItemModel) {
        this.listItem.push(item);
    }

    upDateItem(i: number, item: ItemModel) {
        this.listItem[i] = item
    }

    deleteItem(i: number) {
        this.listItem.splice(i, 1)
    }
}