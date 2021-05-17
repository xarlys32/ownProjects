import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemModel } from './item.model';
import { NgForm } from '@angular/forms';
import { ItemService } from './item.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddIngredient, DeleteIngredient, EditIngredient } from './store/shop.actions';
import * as fromShoppingListReducer from './store/shop.reducer';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  //items: ItemModel[] = []
  items: Observable<{ items: ItemModel[] }>
  editMode: boolean = false
  editItem: number
  @ViewChild('f', { static: false }) f: NgForm
  constructor(private itemService: ItemService,
    private store: Store<fromShoppingListReducer.State>) { }

  ngOnInit() {
    this.items = this.store.select("shopListState")
    /*this.itemService.getListItem().subscribe(item => {
      this.items = item
    })*/
  }

  onSubmit() {
    let item = new ItemModel(this.f.value.product, this.f.value.price)
    if (this.editMode) {
      //this.itemService.upDateItem(this.editItem, item)
      this.store.dispatch(new EditIngredient({ index: this.editItem, item: item }))
      this.editMode = false;
    } else {
      //this.itemService.addItem(item)
      this.store.dispatch(new AddIngredient(item))
    }
    this.f.resetForm()
  }

  onSelectEdit(i: number, item: ItemModel) {
    this.editMode = true
    this.editItem = i
    this.f.setValue({
      price: item.price,
      product: item.name
    })
  }

  onClear() {
    this.f.resetForm()
    this.editMode = false
  }

  onDelete(i: number) {
    this.store.dispatch(new DeleteIngredient(this.editItem))
    //this.itemService.deleteItem(i)
    this.f.resetForm()
  }

}
