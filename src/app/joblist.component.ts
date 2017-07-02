import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './joblist.component.html',
  styleUrls: ['./list.component.css']
})
export class JobListComponent {
  title = 'Job List';
  path = '/jobs';

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  listitems: any[] = [];
  columns = [
    { prop: 'jobid' },
    { prop: 'jobname' },
    { name: 'Date Promised', prop: 'datepromised' },
    { name: 'Bindery' },
    { name: 'Notes' }
  ];

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private router: Router) {
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
