// external module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';

// our library
import { NgaModule } from './library/nga.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

import { AlertModule, DatepickerModule } from 'ng2-bootstrap';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { environment } from '../environments/environment';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '../public/assets/i18n', '.json');
}

let modules = [
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    TranslateModule.forRoot({
        deps: [Http],
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
    }),
    ToasterModule,
    NgaModule.forRoot(),
    DashboardModule
];

// Main App
import { App } from './app.component';

// Main Routes
import { routing } from './app.routing';

@NgModule({
    bootstrap: [App],
    declarations: [
        App
    ],
    imports: [
        ...modules,
        routing
    ],
    providers: [
    ]
})

export class AppModule { }
