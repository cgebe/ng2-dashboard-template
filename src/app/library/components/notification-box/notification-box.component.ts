import { Component, OnInit } from '@angular/core';
import { Message } from '../../models';
import { MessagesService } from '../../services';

@Component( {
    /* tslint:disable */
    selector: '.notificationsBox',
    /* tslint:enable */
    styleUrls: ['./notification-box.component.css'],
    templateUrl: './notification-box.component.html'
})
export class NotificationBoxComponent implements OnInit {

    private messages: Message[];
    private notifLength: {} = {0: '10'};

    constructor() {
        // TODO
    }

    public ngOnInit() {
        // TODO
    }

}
