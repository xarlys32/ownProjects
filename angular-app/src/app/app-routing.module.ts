import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZapatillaComponent } from './zapatillas/zapatilla.component';
import { HomeComponent } from './home/home.component';
//import { ModuleWithProviders} from '@angular/core';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'zapatillas', component: ZapatillaComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre', component: CursosComponent},
  {path: 'cursos/:nombre/:followers', component: CursosComponent},
  {path: 'externo', component: ExternoComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//export const appRoutingProvider: any[] = [];
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
export class AppRoutingModule { }
