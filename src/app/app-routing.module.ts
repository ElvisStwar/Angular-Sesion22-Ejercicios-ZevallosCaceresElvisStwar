import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard'
import { ListaComponent } from './components/lista/lista.component';
import { PermisosGuard } from './guards/permisos.guard';
import { Permisos2Guard } from './guards/permisos2.guard';

const routes: Routes = [

  {path:"register", component:RegisterComponent, ...canActivate(()=> redirectLoggedInTo(["home"])),canActivate:[Permisos2Guard]},
  {path:"login", component:LoginComponent,...canActivate(()=> redirectLoggedInTo(["home"])),canActivate:[Permisos2Guard]},
  {path:"home", component:HomeComponent, ...canActivate(()=> redirectUnauthorizedTo(["login"])),canActivate:[PermisosGuard]},
  {path:"lista", component:ListaComponent, ...canActivate(()=> redirectUnauthorizedTo(["login"])),canActivate:[PermisosGuard]},
  {path:"", pathMatch:"full", redirectTo:"login"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
