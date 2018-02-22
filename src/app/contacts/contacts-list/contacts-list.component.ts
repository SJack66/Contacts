import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[] = [];
  contactForm: FormGroup;

  constructor(private contactsService: ContactsService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loadContacts();
    this.contactForm = this.buildContactForm();
  }

  buildContactForm() {
    return this.formBuilder.group({

    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', [Validators.required, Validators.minLength(9)]],
    email: ['', [Validators.required, Validators.email]],
    addressPostCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    addressCity: ['', Validators.required],
    addressStreet: ['', Validators.required]
    });
  }

  loadContacts(): void {
    this.contactsService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  goToDetailContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }

  addContact() {
    this.contactsService.addContact(this.contactForm.value).subscribe((() => {
      this.loadContacts();
    }));
  }

  removeContact(contact: Contact, event) {
    event.stopPropagation();
    this.contactsService.removeContact(contact.id).subscribe(() => {
      this.loadContacts();
    });

  }
}

