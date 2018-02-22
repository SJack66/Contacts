
import {ContactDetailsComponent} from './contact-details/contact-details.component';
import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContactResolve} from './contact-resolve.service';

const CONTACTS_ROUTES: Route[] = [
  {path: 'contacts/:id',
   component: ContactDetailsComponent,
   resolve: {contact: ContactResolve}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CONTACTS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class ContactsRoutingModule {}
