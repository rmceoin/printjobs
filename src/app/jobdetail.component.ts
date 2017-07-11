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
  styleUrls: ['./detail.component.css']
})
export class JobDetailComponent {
  title = 'Job Detail';

  user: Observable<firebase.User>;
  id: string = '';
  items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;
  values: any;
  nextJobID: FirebaseObjectObservable<any>;
  nextJobIDvalue: any;
  formattypes: FirebaseListObservable<any[]>;
  listformattypes: any[] = [];
  presses: FirebaseListObservable<any[]>;
  listpresses: any[] = [];

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
      this.values.format = '';
      this.values.press = '';

      this.nextJobID = af.object('nextJobID', { preserveSnapshot: true });
      this.nextJobID.subscribe(snapshot => {
        this.nextJobIDvalue = snapshot.val();
      });
    }
    this.formattypes = af.list('/formats', {
      query: { limitToLast: 100 }
    });
    this.formattypes.subscribe(snapshot => {
      this.listformattypes = snapshot;
    })
    this.presses = af.list('/presses', {
      query: { limitToLast: 100 }
    });
    this.presses.subscribe(snapshot => {
      this.listpresses = snapshot;
    })

  }

  dateToString(dateinput) {
    if (dateinput instanceof Date) {
      return dateinput.toString();
    }
    return dateinput;
  }

  incrementNextJobID(){
    return this.nextJobID.$ref.ref.transaction(id => {
        if (id === null) {
            return id = 1000;
        } else {
            return id + 1;
        }
    })
  }

  Save() {
    var values = {
        entrydate: this.dateToString(this.values.entrydate),
        datepromised: this.dateToString(this.values.datepromised),
        bindery: this.values.bindery,
        completeddate: this.dateToString(this.values.completeddate),
        customerproofs: this.values.customerproofs,
        jobid: this.values.jobid,
        jobname: this.values.jobname,
        modifiedBy: this.afAuth.auth.currentUser.email,
        notes: this.values.notes,
        officecopies: this.values.officecopies,
        prepressfilesduein: this.dateToString(this.values.prepressfilesduein),
        pressproofs: this.values.pressproofs,
        specialinstructions: this.values.specialinstructions,
        format: this.values.format,
        press: this.values.press,
      };
    if (this.id == 'new') {
      this.incrementNextJobID();
      values.jobid = this.nextJobIDvalue;
      this.items.push(values);
    } else {
      this.item.update(values);
    }
    this.router.navigate(['/jobs']);
  }
}
