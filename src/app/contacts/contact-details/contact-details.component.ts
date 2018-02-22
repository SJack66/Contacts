import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../models/contact';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact;
  contactForm: FormGroup;

  constructor(private contactsService: ContactsService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    this.loadContact();
    this.contactForm = this.buildContactForm();
  }

  buildContactForm() {
    return this.formBuilder.group({

      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName, Validators.required],
      phone: [this.contact.phone, [Validators.required, Validators.minLength(9)]],
      email: [this.contact.email, [Validators.required, Validators.email]],
      addressPostCode: [this.contact.addressPostCode, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      addressCity: [this.contact.addressCity, Validators.required],
      addressStreet: [this.contact.addressStreet, Validators.required]
    });
  }

  loadContact() {
   this.contact = this.route.snapshot.data['contact'];
  }

  updateContact() {
    this.contactsService.updateContact(this.contact.id, this.contactForm.value).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }
}
