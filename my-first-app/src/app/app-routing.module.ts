import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { ShopComponent } from './shop/shop.component';
import { ItemComponent } from './shop/item/item.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipesListComponent },
  { path: 'recipes/details/:id', component: RecipesItemComponent },
  {
    path: 'shopping', component: ShopComponent, children: [
      { path: 'item', component: ItemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
