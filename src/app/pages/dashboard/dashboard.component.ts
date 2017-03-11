import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { User } from '../../library/models';
import { UserService } from '../../library/services';
import { LoggerService } from '../../library/services';

import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { DonutTranslateService } from '../../library/services';

@Component( {
    selector: 'donut-dashboard',
    styles: [],
    templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {
    private toasterConfig: ToasterConfig;
    private logger: LoggerService;
    private mylinks: Array<any> = [];

    constructor(
      private userServ: UserService,
      private toastr: ToasterService,
      private translate: DonutTranslateService
    ) {
        this.toasterConfig = new ToasterConfig( {
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
        //this.translate = translate.getTranslate();
        //this.logger = new LoggerService( this.translate );
    }

    public ngOnInit() {

        // define here your own links menu structure
        this.mylinks = [
          {
            'title': 'Home',
            'icon': 'dashboard',
            'link': ['/dashboard']
          },
          {
            'title': 'Client',
            'icon': 'usd',
            'link': ['/dashboard/client']
          },
          {
            'title': 'Sub menu',
            'icon': 'link',
            'sublinks': [
              {
                'title': 'Page 2',
                'link': ['/dashboard/page/2'],
              },
              {
                'title': 'Page 3',
                'link': ['/dashboard/page/3'],
              }
            ]
          },
          {
            'title': 'External Link',
            'icon': 'google',
            'link': ['http://google.com'],
            'external': true,
            'target': '_blank'
          },
          {
            'title': 'External Links',
            'icon': 'link',
            'sublinks': [
              {
                'title': 'Github',
                'link': ['http://github.com'],
                'icon': 'github',
                'external': true,
                'target': '_blank'
              },
              {
                'title': 'Yahoo',
                'link': ['http://yahoo.com'],
                'icon': 'yahoo',
                'external': true,
                'target': '_blank'
              }
            ]
          }
        ];

    }

}
