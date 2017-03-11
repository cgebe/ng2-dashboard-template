import { Routes, RouterModule }  from '@angular/router';

import { ClientComponent } from './client.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
