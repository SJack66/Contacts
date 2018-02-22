import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {SharedModule} from '../shared-module/shared.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactResolve} from './contact-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [ContactsListComponent],
  providers: [
    ContactResolve
  ],

  declarations: [ContactsListComponent, ContactDetailsComponent]
})
export class ContactsModule { }
