import { User } from '../../models';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    public currentUser: ReplaySubject<User> = new ReplaySubject<User>(1);

    constructor(
        private router: Router
    ) {
        let user1 = new User({
            avatarUrl: 'public/assets/img/yoda.png',
            email: 'test@mydata.de',
            firstname: 'Yoda',
            lastname: 'Minch'
        });

        user1.connected = true;
        this.setCurrentUser(user1);
    }

    public setCurrentUser(user: User) {
        this.currentUser.next(user);
    }

    public logout() {
        let user = new User();
        user.connected = false;
        this.setCurrentUser(user);
        this.router.navigate(['login']);
    }
}
