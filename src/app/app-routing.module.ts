import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { JobListComponent }  from './joblist.component';
import { JobDetailComponent }  from './jobdetail.component';
import { FormatListComponent }  from './formatlist.component';
import { FormatDetailComponent }  from './formatdetail.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
    { path: 'jobs/:id', component: JobDetailComponent },
    { path: 'jobs',     component: JobListComponent },
    { path: 'formats/:id', component: FormatDetailComponent },
    { path: 'formats',     component: FormatListComponent },
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