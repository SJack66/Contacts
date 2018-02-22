import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Contact} from './models/contact';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  private apiUrl = 'http://localhost:3000/api/contacts';
  constructor(private http: Http) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get(this.apiUrl)
      .map((res) => res.json());
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get(this.apiUrl + `/${id}`)
      .map((res) => res.json());
  }

  addContact(data): Observable<Contact> {
    return this.http.post(this.apiUrl, data)
      .map((res) => res.json());
  }

  updateContact(id: number, data): Observable<Contact> {
    return this.http.put(this.apiUrl + `/${id}`, data)
      .map((res) => res.json());
  }

  removeContact(id: number): Observable<Contact> {
    return this.http.delete(this.apiUrl + `/${id}`)
      .map((res) => res.json());
  }

}
