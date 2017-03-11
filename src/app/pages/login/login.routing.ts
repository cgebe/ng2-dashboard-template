import { Routes, RouterModule }  from '@angular/router';

import { LoginComponent } from './login.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
