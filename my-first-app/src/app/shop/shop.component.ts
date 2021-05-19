import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemModel } from './item.model';
import { NgForm } from '@angular/forms';
import { ItemService } from './item.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  items: ItemModel[] = []
  editMode: boolean = false
  editItem: number
  @ViewChild('f') f: NgForm
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getListItem().subscribe(item => {
      this.items = item
    })
  }

  onSubmit() {
    let item = new ItemModel(this.f.value.product, this.f.value.price)
    if (this.editMode) {
      this.itemService.upDateItem(this.editItem, item)
      this.editMode = false;
    } else {
      this.itemService.addItem(item)
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
    this.itemService.deleteItem(i)
    this.f.resetForm()
  }

}
