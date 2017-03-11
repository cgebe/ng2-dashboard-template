import { Routes, RouterModule }  from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

import { CanActivateGuard } from '../../library/services';

import { HomeComponent } from './home';
import { ClientComponent } from './client';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    { path: 'login', loadChildren: '../login/login.module#LoginModule' },
    { path: 'register', loadChildren: '../register/register.module#RegisterModule' },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' }
            //{ path: 'client', component: ClientComponent }
            //{ path: 'page', component: PageComponent }
        ]
        //canActivate: [CanActivateGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
