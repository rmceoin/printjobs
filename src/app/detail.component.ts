import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import { titleMap } from './titlemap';

@Component({
  selector: 'app-root',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  title = '';
  path = '';

  user: Observable<firebase.User>;
  id: string = '';
  items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;
  values: any;

  constructor(
    public afAuth: AngularFireAuth,
    af: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.title = titleMap[this.route.snapshot.url[0].toString()];
    this.path = '/' + this.route.snapshot.url[0];

    this.id = this.route.snapshot.params['id'];
    this.user = this.afAuth.authState;
    if (this.id != "new") {
      this.item = af.object(this.path + '/' + this.id, { preserveSnapshot: true });
      this.item.subscribe(snapshot => {
        this.values = snapshot.val();
      });
    } else {
      this.item = af.object(this.path);
      this.items = af.list(this.path, {
        query: {
          limitToLast: 1
        }
      });
      this.values = {};
      this.values.name = '';
      this.values.notes = '';
    }
  }

  Save() {
    var values = {
        name: this.values.name,
        notes: this.values.notes,
        modifiedBy: this.afAuth.auth.currentUser.email
      };
    if (this.id == 'new') {
      this.items.push(values);
    } else {
      this.item.update(values);
    }
    this.router.navigate([this.path]);
  }
}
