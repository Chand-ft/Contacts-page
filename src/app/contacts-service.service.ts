import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsServiceService {
  constructor(private http: HttpClient) {}
  getDataFromJson() {
    return this.http.get("assets/contacts.json")
  }
}
