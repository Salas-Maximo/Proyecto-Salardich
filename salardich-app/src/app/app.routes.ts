// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  {path: 'registrar', component:RegistrarseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
