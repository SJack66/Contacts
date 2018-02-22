

import {ContactsService} from './contacts.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Contact} from './models/contact';
import {Injectable} from '@angular/core';


@Injectable()
export class ContactResolve implements Resolve<Contact> {

  constructor (private contactService: ContactsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.contactService.getContact(route.params['id']);
  }
}
