import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZapatillaComponent } from './zapatillas/zapatilla.component';
import { HomeComponent } from './home/home.component';
//import { ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'zapatillas', component: ZapatillaComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//export const appRoutingProvider: any[] = [];
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
export class AppRoutingModule { }
