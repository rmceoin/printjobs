import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './formattypedetail.component.html',
  styleUrls: ['./detail.component.css']
})
export class FormatTypeDetailComponent {
  title = 'Format Type Detail';

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
    this.id = this.route.snapshot.params['id'];
    this.user = this.afAuth.authState;
    if (this.id != "new") {
      this.item = af.object('/formattypes/' + this.id, { preserveSnapshot: true });
      this.item.subscribe(snapshot => {
        this.values = snapshot.val();
      });
    } else {
      this.item = af.object('/formattypes');
      this.items = af.list('/formattypes', {
        query: {
          limitToLast: 1
        }
      });
      this.values = {};
      this.values.formattypename = '';
    }
  }

  Save() {
    var values = {
        formattypename: this.values.formattypename,
        modifiedBy: this.afAuth.auth.currentUser.email
      };
    if (this.id == 'new') {
      this.items.push(values);
    } else {
      this.item.update(values);
    }
    this.router.navigate(['/formattypes']);
  }
}
