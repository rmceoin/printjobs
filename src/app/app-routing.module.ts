import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { JobListComponent }  from './joblist.component';
import { JobDetailComponent }  from './jobdetail.component';
import { FormatTypeDetailComponent }  from './formattypedetail.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
    { path: 'jobs/:id', component: JobDetailComponent },
    { path: 'jobs',     component: JobListComponent },
    { path: 'formattypes/:id', component: FormatTypeDetailComponent },
//    { path: 'formattypes',     component: FormatTypeListComponent },
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