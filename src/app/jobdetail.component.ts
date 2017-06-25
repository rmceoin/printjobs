import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.css']
})
export class JobDetailComponent {
  title = 'Job Detail';

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
      this.item = af.object('/jobs/' + this.id, { preserveSnapshot: true });
      this.item.subscribe(snapshot => {
        this.values = snapshot.val();
      });
    } else {
      this.item = af.object('/jobs');
      this.items = af.list('/jobs', {
        query: {
          limitToLast: 1
        }
      });
      this.values = {};
      this.values.jobid = '';
      this.values.entrydate = '';
      this.values.jobname = '';
      this.values.notes = '';
      this.values.datepromised = '';
      this.values.completeddate = '';
      this.values.officecopies = '';
      this.values.bindery = false;
      this.values.prepressfilesduein = '';
      this.values.customerproofs = false;
      this.values.pressproofs = false;
      this.values.specialinstructions = '';
    }
  }

  Save() {
    var values = {
        jobid: this.values.jobid,
        entrydate: this.values.entrydate,
        jobname: this.values.jobname,
        notes: this.values.notes,
        datepromised: this.values.datepromised,
        completeddate: this.values.completeddate,
        officecopies: this.values.officecopies,
        bindery: this.values.bindery,
        prepressfilesduein: this.values.prepressfilesduein,
        customerproofs: this.values.customerproofs,
        pressproofs: this.values.pressproofs,
        specialinstructions: this.values.specialinstructions,
        modifiedBy: this.afAuth.auth.currentUser.email
      };
    if (this.id == 'new') {
      this.items.push(values);
    } else {
      this.item.update(values);
    }
    this.router.navigate(['/jobs']);
  }
}
