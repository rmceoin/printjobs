//
// Some inspiration from:
// https://coursetro.com/posts/code/54/Angular-4-Firebase-Tutorial:-Make-a-Simple-Angular-4-App
//

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MaterialModule } from "@angular/material";
import { MdToolbarModule } from "@angular/material";
import { MdMenuModule } from '@angular/material';
import { MdSidenavModule, MdSidenavToggleResult, MdSidenav, MdSidenavContainer } from '@angular/material';
import { MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdDialogModule, MdDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import * as firebase from 'firebase/app';
import { firebaseConfig } from './firebaseconfig';
import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JobListComponent } from './joblist.component';
import { JobDetailComponent } from './jobdetail.component';
import { JobNameListComponent } from './jobnamelist.component';
import { JobNameDetailComponent } from './jobnamedetail.component';
import { JobNameDialogComponent } from './dialog/jobnamedialog.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { PageNotFoundComponent } from './pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    JobDetailComponent,
    JobListComponent,
    JobNameDetailComponent,
    JobNameListComponent,
    JobNameDialogComponent,
    DetailComponent,
    ListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdMenuModule,
    MdSidenavModule,
    MdNativeDateModule,
    MdCheckboxModule,
    MdButtonModule,
    MdCardModule,
    MdSelectModule,
    MdDialogModule,
//    MdDialogRef,
    NgxDatatableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ JobNameDialogComponent ]
})
export class AppModule { }

