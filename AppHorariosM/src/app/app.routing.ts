import {ModuleWithProviders} from'@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuLogOutComponent } from './menu-log-out/menu-log-out.component';
const appRoutes:Routes=[
    {path:'',component:LoginComponent},
    {path:'Login',component:LoginComponent},
    {path:'MenuUsuario',component:MenuUsuarioComponent},
    {path:'MenuAdmin',component:MenuAdminComponent},
    {path:'LogOut',component:MenuLogOutComponent}

                
                   
                
                        
        
    
    

];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);