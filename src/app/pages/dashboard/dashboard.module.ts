import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './dashboard.routing';
import { NgaModule } from '../../library/nga.module';
import { TranslateModule } from 'ng2-translate';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
      CommonModule,
      NgaModule,
      TranslateModule,
      ToasterModule,
      routing
  ],
  declarations: [
      DashboardComponent
  ]
})
export class DashboardModule {
}
