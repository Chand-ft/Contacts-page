import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsServiceService {
  age: number = 0;

  constructor(private http: HttpClient) {}
  getDataFromJson() {
    return this.http.get("assets/contacts.json")
  }
  
  getAge(firstName: string) {
    console.log("name",firstName)
    return this.http.get<any>(`https://api.agify.io?name=${firstName}`);
  }
}