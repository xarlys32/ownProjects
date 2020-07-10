import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { IngredientService } from './recipes/ingredient.service';
import { RecipesService } from './recipes/recipes.service';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ItemService } from './shop/item.service';
import { DecimalvalidaitonDirective } from './directives/decimalvalidaiton-directive.directive';
import { GraphComponent } from './graph/graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GameControllComponent } from './databinding/game-controll/game-controll.component';
import { OddComponent } from './databinding/odd/odd.component';
import { EvenComponent } from './databinding/even/even.component';
import { ManageBindingComponent } from './databinding/manage-binding/manage-binding.component';
import { ObservableExampleComponent } from './rxjs/observables/observable-example/observable-example.component';
import { SubjectExampleComponent } from './rxjs/subjects/subject-example/subject-example.component';
import { RxjsContainerComponent } from './rxjs/rxjs-container/rxjs-container.component';
import { SubjectService } from './rxjs/subject-demo.service';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { RecipesNewComponent } from './recipes-new/recipes-new.component';
import { RecipesLeftBarComponent } from './recipes-new/recipes-left-bar/recipes-left-bar.component';
import { RecipesNewService } from './recipes-new/recipes-new.service';
import { RecipesDetailv2Component } from './recipes-new/recipes-detailv2/recipes-detailv2.component';
import { RecipesFormComponent } from './recipes-new/recipes-form/recipes-form.component';
import { PopUpComponent } from './dinamic-components/pop-up/pop-up.component';

import { HttpClientModule } from '@angular/common/http';

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
    DecimalvalidaitonDirective,
    GraphComponent,
    GameControllComponent,
    OddComponent,
    EvenComponent,
    ManageBindingComponent,
    ObservableExampleComponent,
    SubjectExampleComponent,
    RxjsContainerComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    RecipesNewComponent,
    RecipesLeftBarComponent,
    RecipesDetailv2Component,
    RecipesFormComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [
    DropdownDirective,
    IngredientService,
    RecipesService,
    ItemService,
    SubjectService,
    RecipesNewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
