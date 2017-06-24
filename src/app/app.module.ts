//
// https://coursetro.com/posts/code/54/Angular-4-Firebase-Tutorial:-Make-a-Simple-Angular-4-App
//

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JobListComponent } from './joblist.component';
import { JobDetailComponent } from './jobdetail.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { firebaseConfig } from './firebaseconfig';

/* export const firebaseConfig = {
    apiKey: "AIzaSyCefjAdbXLt4Jpkxg6TTgpH41MrEQVLRvU",
    authDomain: "fire-ang-198fc.firebaseapp.com",
    databaseURL: "https://fire-ang-198fc.firebaseio.com",
    projectId: "fire-ang-198fc",
    storageBucket: "fire-ang-198fc.appspot.com",
    messagingSenderId: "545464392390"
}; */

@NgModule({
  declarations: [
    AppComponent,
    JobDetailComponent,
    JobListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

