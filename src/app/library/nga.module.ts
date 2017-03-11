import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';

import {
    AppFooterComponent,
    AppHeaderComponent,
    BreadcrumbComponent,
    ControlSidebarComponent,
    MenuAsideComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent
} from './components';

import {

} from './pipes';

import {
    BreadcrumbService,
    CanActivateGuard,
    LoggerService,
    MessagesService,
    NotificationService,
    RestService,
    DonutTranslateService,
    UserService
} from './services';

import {

} from './validators';

const NGA_COMPONENTS = [
    AppFooterComponent,
    AppHeaderComponent,
    BreadcrumbComponent,
    ControlSidebarComponent,
    MenuAsideComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent
];

const NGA_DIRECTIVES = [

];

const NGA_PIPES = [

];

const NGA_SERVICES = [
    BreadcrumbService,
    CanActivateGuard,
    LoggerService,
    MessagesService,
    NotificationService,
    RestService,
    DonutTranslateService,
    UserService
];

const NGA_VALIDATORS = [

];

@NgModule({
    declarations: [
        ...NGA_PIPES,
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    exports: [
        ...NGA_PIPES,
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS
    ]
})
export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: NgaModule,
            providers: [
                ...NGA_VALIDATORS,
                ...NGA_SERVICES
            ],
        };
    }
}
