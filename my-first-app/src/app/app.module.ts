import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { FormsModule } from '@angular/forms';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { IngredientService } from './recipes/ingredient.service';
import { RecipesService } from './recipes/recipes.service';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ItemComponent } from './shop/item/item.component';
import { ItemService } from './shop/item.service';
import { DecimalvalidaitonDirective } from './directives/decimalvalidaiton-directive.directive';
import { GraphComponent } from './graph/graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GameControllComponent } from './databinding/game-controll/game-controll.component';
import { OddComponent } from './databinding/odd/odd.component';
import { EvenComponent } from './databinding/even/even.component';
import { ManageBindingComponent } from './databinding/manage-binding/manage-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    BetterHighlightDirective,
    DropdownDirective,
    HomeComponent,
    ShopComponent,
    ItemComponent,
    DecimalvalidaitonDirective,
    GraphComponent,
    GameControllComponent,
    OddComponent,
    EvenComponent,
    ManageBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [
    DropdownDirective,
    IngredientService,
    RecipesService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
