import { NgModule } from '@angular/core';
import { RecipesLeftBarComponent } from './recipes-left-bar/recipes-left-bar.component';
import { RecipesDetailv2Component } from './recipes-detailv2/recipes-detailv2.component';
import { RecipesNewComponent } from './recipes-new.component';
import { RecipesFormComponent } from './recipes-form/recipes-form.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesNewService } from './recipes-new.service';

@NgModule({
    declarations: [
        RecipesNewComponent,
        RecipesLeftBarComponent,
        RecipesDetailv2Component,
        RecipesFormComponent,
    ],
    imports: [
        RecipesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        RecipesNewService
    ] 
})
export class RecipesModule{}