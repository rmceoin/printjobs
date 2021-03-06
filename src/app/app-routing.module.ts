import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { JobListComponent }  from './joblist.component';
import { JobDetailComponent }  from './jobdetail.component';
import { JobNameListComponent }  from './jobnamelist.component';
import { JobNameDetailComponent }  from './jobnamedetail.component';
import { ListComponent }  from './list.component';
import { DetailComponent }  from './detail.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
    { path: 'jobs/:id', component: JobDetailComponent },
    { path: 'jobs',     component: JobListComponent },
    { path: 'jobnames/:id', component: JobNameDetailComponent },
    { path: 'jobnames',     component: JobNameListComponent },
    { path: 'entry/:id', component: DetailComponent },
    { path: 'entry',     component: ListComponent },
    { path: 'formats/:id', component: DetailComponent },
    { path: 'formats',     component: ListComponent },
    { path: 'bindingtypes/:id', component: DetailComponent },
    { path: 'bindingtypes',     component: ListComponent },
    { path: 'presses/:id', component: DetailComponent },
    { path: 'presses',     component: ListComponent },
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