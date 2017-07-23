import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './jobnamedialog.component.html',
  styleUrls: ['./jobnamedialog.component.css']
})
export class JobNameDialogComponent {
  title = 'Job Name';

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  listitems: any[] = [];
  columns = [
    { name: 'Name' },
//    { name: 'Notes' }
  ];
  path = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, private router: Router,
    private route: ActivatedRoute,
    public dialogRef: MdDialogRef<JobNameDialogComponent>
  ) {
    this.path = '/jobnames';
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
      this.dialogRef.close(event.value);
    }
  }
}
