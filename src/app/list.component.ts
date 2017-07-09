import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import { titleMap } from './titlemap';

@Component({
  selector: 'app-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  title = '';

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  listitems: any[] = [];
  columns = [
    { name: 'Name' },
    { name: 'Notes' }
  ];
  path = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private router: Router,
    private route: ActivatedRoute,
  ) {
    this.title = titleMap[this.route.snapshot.url[0].toString()];
    this.path = '/' + this.route.snapshot.url[0];
    this.user = this.afAuth.authState;
    this.items = af.list( this.path, {
      query: {
        limitToLast: 50
      }
    });
    this.items.subscribe(snapshot => {
      this.listitems = snapshot;
    })
  }

  onActivate(event) {
    if (event.type = "click") {
      this.router.navigate([this.path + '/' + event.row.$key]);
    }
  }

  newItem(): void {
    this.router.navigate([this.path + '/new']);
  }
}
