import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../item.service';
import { ItemModel } from '../item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @ViewChild('f', { static: false }) form: NgForm;

  public itemList: ItemModel[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getListItem().subscribe(
      data => {
        this.itemList = data.next;
      }
    );
  }

  onSubmit() {
    console.log(this.form)
    let item: ItemModel = new ItemModel();
    item.category = this.form.value['category'];
    item.name = this.form.value['name'];
    item.price = this.form.value['price'];
    this.itemService.addItem(item);

  }
}
