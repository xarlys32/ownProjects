import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { DropdownDirective } from './directives/dropdown.directive';
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
import { PopUpComponent } from './dinamic-components/pop-up/pop-up.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth/auth.component';
import { LoadComponent } from './dinamic-components/add-programatically/load/load.component';
import { PlaceholderDirective } from './dinamic-components/add-programatically/placeholder/placesholder.directive';

import { AnimationTriggerComponent } from './animation/animation-trigger/animation-trigger.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthService } from './auth/auth/auth.service';
import { AuthOkComponent } from './auth/auth-ok/auth-ok.component';
import { AuthInterceptorService } from './auth/auth/auth-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shop/store/shop.reducer';
import * as fromAppReducer from './store/app.reducer'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    PopUpComponent,
    AuthComponent,
    LoadComponent,
    PlaceholderDirective,
    AnimationTriggerComponent,
    AuthOkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromAppReducer.appReducer)
  ],
  providers: [
    DropdownDirective,
    ItemService,
    SubjectService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  //This is for dynamically added components that are added using ViewContainerRef.createComponent()
  entryComponents: [
    PopUpComponent
  ]
})
export class AppModule { }
