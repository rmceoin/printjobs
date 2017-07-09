import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { JobListComponent }  from './joblist.component';
import { JobDetailComponent }  from './jobdetail.component';
import { ListComponent }  from './list.component';
import { DetailComponent }  from './detail.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
    { path: 'jobs/:id', component: JobDetailComponent },
    { path: 'jobs',     component: JobListComponent },
    { path: 'formats/:id', component: DetailComponent },
    { path: 'formats',     component: ListComponent },
    { path: 'bindingtypes/:id', component: DetailComponent },
    { path: 'bindingtypes',     component: ListComponent },
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