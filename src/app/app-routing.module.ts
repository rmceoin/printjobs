import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { JobListComponent }  from './joblist.component';
import { JobDetailComponent }  from './jobdetail.component';
import { FormatTypeListComponent }  from './formattypelist.component';
import { FormatTypeDetailComponent }  from './formattypedetail.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
    { path: 'jobs/:id', component: JobDetailComponent },
    { path: 'jobs',     component: JobListComponent },
    { path: 'formats/:id', component: FormatTypeDetailComponent },
    { path: 'formats',     component: FormatTypeListComponent },
    { path: '',   redirectTo: '/jobs', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}