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
import { AuthComponent } from './authotitation/auth/auth.component';
import { LoadComponent } from './dinamic-components/add-programatically/load/load.component';
import { AnimationTriggerComponent } from './animation/animation-trigger/animation-trigger.component';
import { AuthOkComponent } from './authotitation/auth-ok/auth-ok.component';
import { AuthGuard } from './authotitation/auth/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipesListComponent },
  { path: 'recipes/details/:id', component: RecipesItemComponent },
  { path: 'recipes-new', canActivate: [AuthGuard], 
      loadChildren: () => import('./recipes-new/recipes.module').then(m => m.RecipesModule) },
  { path: 'shopping', component: ShopComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'manage_binding', component: ManageBindingComponent },
  {
    path: 'rxjs', component: RxjsContainerComponent, children: [
      { path: 'observables', component: ObservableExampleComponent },
      { path: 'subject', component: SubjectExampleComponent }
    ]
  },
  { path: 'template_form', component: TemplateFormComponent },
  { path: 'reactive_form', component: ReactiveFormComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'authok', component: AuthOkComponent },
  { path: 'load', component: LoadComponent },
  { path: 'animation', component: AnimationTriggerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
