import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RegisterProductosComponent } from './register-productos/register-productos.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    RegisterProductosComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    RegisterProductosComponent
  ]
})
export class ComponentsModule { }
