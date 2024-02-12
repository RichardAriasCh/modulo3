import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NuevousuarioComponent } from './components/dashboard/nuevousuario/nuevousuario.component';

export const routes: Routes = [
    {path: 'login', component:LoginComponent },
    {path: 'dashboard', component: DashboardComponent },
    {path: 'nuevo',  component:NuevousuarioComponent},
    {path: '**', redirectTo: '/login'}
];
