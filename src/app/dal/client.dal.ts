import { Injectable } from '@angular/core';
import { Client } from '../library/models';
import { NotificationService } from '../library/services';

@Injectable()
export class ClientDAL {
  constructor(private notif: NotificationService) { }


}
