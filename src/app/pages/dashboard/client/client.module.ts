import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../library/nga.module';

import { ClientComponent } from './client.component';
import { routing } from './client.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ClientComponent
  ],
  providers: [
  ]
})
export class ClientModule {}
