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
  nextJobID: FirebaseObjectObservable<any>;
  nextJobIDvalue: any;
  formattypes: FirebaseListObservable<any[]>;
  listformattypes: any[] = [];
  presses: FirebaseListObservable<any[]>;
  listpresses: any[] = [];
  entry: FirebaseListObservable<any[]>;
  listentry: any[] = [];
  bindingtypes: FirebaseListObservable<any[]>;
  listbindingtypes: any[] = [];

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
      this.values.billablecopies = 0;
      this.values.bindingpockets = '';
      this.values.bindery = false;
      this.values.bindingtype = '';
      this.values.bluelines = false;
      this.values.completeddate = '';
      this.values.coverpagecount = 0;
      this.values.cuttingrequired = false;
      this.values.customerproofs = false;
      this.values.datepromised = '';
      this.values.entrydate = '';
      this.values.entry = '';
      this.values.foldingrequired = false;
      this.values.format = '';
      this.values.inkjet = false;
      this.values.inserting = false;
      this.values.jobid = '';
      this.values.jobname = '';
      this.values.notes = '';
      this.values.officecopies = '';
      this.values.mailfilesduein = '';
      this.values.pagecount = 0;
      this.values.prepressfilesduein = '';
      this.values.presscheck = false;
      this.values.pressproofs = false;
      this.values.press = '';
      this.values.pubdate = '';
      this.values.quantity = 0;
      this.values.samplesqty = 0;
      this.values.specialinstructions = '';
      this.values.textsigs = 0;
      this.values.timepromised = '';
      this.values.sigs1 = 0;
      this.values.sigs2 = 0;
      this.values.sigs3 = 0;
      this.values.sigs4 = 0;
      this.values.sigs5 = 0;
      this.values.sigs6 = 0;
      this.values.sigs7 = 0;
      this.values.sigs8 = 0;
      this.values.uv = false;

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

    this.entry = af.list('/entry', {
      query: { limitToLast: 100 }
    });
    this.entry.subscribe(snapshot => {
      this.listentry = snapshot;
    })

    this.bindingtypes = af.list('/bindingtypes', {
      query: { limitToLast: 100 }
    });
    this.bindingtypes.subscribe(snapshot => {
      this.listbindingtypes = snapshot;
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
        billablecopies: this.values.billablecopies,
        bindery: this.values.bindery,
        bindingpockets: this.values.bindingpockets,
        bindingtype: this.values.bindingtype,
        bluelines: this.values.bluelines,
        completeddate: this.dateToString(this.values.completeddate),
        coverpagecount: this.values.coverpagecount,
        customerproofs: this.values.customerproofs,
        cuttingrequired: this.values.cuttingrequired,
        foldingrequired: this.values.foldingrequired,
        inkjet: this.values.inkjet,
        inserting: this.values.inserting,
        jobid: this.values.jobid,
        jobname: this.values.jobname,
        mailfilesduein: this.dateToString(this.values.mailfilesduein),
        modifiedBy: this.afAuth.auth.currentUser.email,
        notes: this.values.notes,
        officecopies: this.values.officecopies,
        pagecount: this.values.pagecount,
        prepressfilesduein: this.dateToString(this.values.prepressfilesduein),
        presscheck: this.values.presscheck,
        pressproofs: this.values.pressproofs,
        pubdate: this.dateToString(this.values.pubdate),
        samplesqty: this.values.samplesqty,
        specialinstructions: this.values.specialinstructions,
        format: this.values.format,
        press: this.values.press,
        entry: this.values.entry,
        quantity: this.values.quantity,
        textsigs: this.values.textsigs,
        timepromised: this.values.timepromised,
        sig1: this.values.sig1,
        sig2: this.values.sig2,
        sig3: this.values.sig3,
        sig4: this.values.sig4,
        sig5: this.values.sig5,
        sig6: this.values.sig6,
        sig7: this.values.sig7,
        sig8: this.values.sig8,
        uv: this.values.uv,
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
