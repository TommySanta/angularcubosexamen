import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { CubosMarcaComponent } from './components/cubosmarca/cubosmarca.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "cubo/:id", component: CuboComponent},
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'marcas/:marca', component: CubosMarcaComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
