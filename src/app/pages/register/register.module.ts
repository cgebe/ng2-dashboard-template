import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../library/nga.module';

import { RegisterComponent } from './register.component';
import { routing } from './register.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
  ]
})
export class RegisterModule {}
