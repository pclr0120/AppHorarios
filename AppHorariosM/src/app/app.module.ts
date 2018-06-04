import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule}from '@angular/forms';
import {routing,appRoutingProviders} from './app.routing';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuLogOutComponent } from './menu-log-out/menu-log-out.component';
import { RegistrarAdminComponent } from './Admin/Paginas/registrar-admin/registrar-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuUsuarioComponent,
    MenuAdminComponent,
    MenuLogOutComponent,
    RegistrarAdminComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
