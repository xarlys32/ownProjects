import { Component, OnInit } from '@angular/core';
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
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getListItem().subscribe(item => {
      this.items = item
    })
  }

  onSubmit(f: NgForm){

    let item = new ItemModel(f.value.product, f.value.price)
    this.itemService.addItem(item)
  }

}
