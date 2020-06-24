import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { ShopComponent } from './shop/shop.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { GraphComponent } from './graph/graph.component';
import { ManageBindingComponent } from './databinding/manage-binding/manage-binding.component';
import { RxjsContainerComponent } from './rxjs/rxjs-container/rxjs-container.component';
import { ObservableExampleComponent } from './rxjs/observables/observable-example/observable-example.component';
import { SubjectExampleComponent } from './rxjs/subjects/subject-example/subject-example.component';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipesListComponent },
  { path: 'recipes/details/:id', component: RecipesItemComponent },
  {
    path: 'shopping', component: ShopComponent
  },
  { path: 'graph', component: GraphComponent },
  { path: 'manage_binding', component: ManageBindingComponent },
  {
    path: 'rxjs', component: RxjsContainerComponent, children: [
      { path: 'observables', component: ObservableExampleComponent },
      { path: 'subject', component: SubjectExampleComponent }
    ]
  },
  { path: 'template_form', component: TemplateFormComponent},
  { path: 'reactive_form', component: ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
