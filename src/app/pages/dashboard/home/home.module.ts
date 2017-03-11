import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../library/nga.module';

import { HomeComponent } from './home.component';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';

import { routing } from './home.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        AlertModule,
        DatepickerModule,
        routing
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
    ]
})
export class HomeModule { }
