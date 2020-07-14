import { NgModule } from '@angular/core';
import { RecipesNewComponent } from './recipes-new.component';
import { RecipesFormComponent } from './recipes-form/recipes-form.component';
import { RecipesDetailv2Component } from './recipes-detailv2/recipes-detailv2.component';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: 'recipes-new', component: RecipesNewComponent, children: [
          { path: 'new', component: RecipesFormComponent },
          { path: ':id', component: RecipesDetailv2Component },
          { path: ':id/edit', component: RecipesFormComponent },
        ]
      }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}