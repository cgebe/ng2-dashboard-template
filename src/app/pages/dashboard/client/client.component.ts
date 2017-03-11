import { Component, OnInit, OnDestroy } from '@angular/core';
import { Client } from '../../../library/models';
import { ClientDAL } from '../../../dal/client.dal';
import { BreadcrumbService } from '../../../library/services';

@Component({
  providers: [ClientDAL],
  selector: 'app-client',
  styleUrls: ['./client.component.css'],
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit, OnDestroy {


  constructor(private dal: ClientDAL, private breadServ: BreadcrumbService) {
    // TODO
  }

  public ngOnInit() {
    this.breadServ.set({
      description: 'This is our Client page',
      display: true,
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: 'Home'
        },
        {
          icon: 'clock-o',
          link: ['/client'],
          title: 'Client'
        }
      ]
    });

  }

  public ngOnDestroy() {
    this.breadServ.clear();
  }

}
