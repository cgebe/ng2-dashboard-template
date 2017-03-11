import { Routes, RouterModule }  from '@angular/router';

import { RegisterComponent } from './register.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
