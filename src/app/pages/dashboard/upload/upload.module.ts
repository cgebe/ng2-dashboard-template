import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../library/nga.module';
import { FileUploadModule } from 'ng2-file-upload';

import { UploadComponent } from './upload.component';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';

import { routing } from './upload.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        FileUploadModule,
        routing
    ],
    declarations: [
        UploadComponent
    ],
    providers: [
    ]
})
export class UploadModule { }
