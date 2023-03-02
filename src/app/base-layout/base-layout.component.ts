import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactsServiceService } from '../contacts-service.service';

interface Contacts {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  cellNumber: string;
  bio: string;
}

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  @ViewChild('filterInput') filterInput!: ElementRef<HTMLInputElement>;
  constructor(private contactsService: ContactsServiceService) {}

  contactsClicked: Boolean = false;
  aboutMeClicked: Boolean = true;
  contacts: Contacts[] = [];
  filteredContacts: Contacts[] = [];

  selectedContact: any = {};
  userSearch: any = '';
  upperCaseSearch: any = '';

  ngOnInit(): void {
    this.getContactsData();
    
  }
  filteringContacts(){
    this.upperCaseSearch = this.userSearch.toUpperCase();
return this.contacts.filter((element) =>{
  return element.firstName.toUpperCase().includes(this.upperCaseSearch)
  || element.lastName.toUpperCase().includes(this.upperCaseSearch)
  || element.cellNumber.includes(this.upperCaseSearch)
  // || (element.firstName.toUpperCase().includes(this.upperCaseSearch) &&element.lastName.toUpperCase().includes(this.upperCaseSearch))
  
  //TODO Partition names individually 

}) 
  }

  clickContacts() {
    this.contactsClicked = true;
    this.aboutMeClicked = false;
  }
  clickAboutMe() {
    this.aboutMeClicked = true;
    this.contactsClicked = false;
  }

  getContactsData() {
    this.contactsService.getDataFromJson().subscribe((contacts: any) => {
      this.contacts = contacts;
      this.filteredContacts = contacts; // initialize filteredContacts to all contacts
    });
  }

  selectCard(contact:any){
    this.selectedContact = contact;
  }

onFilterContacts(searchValue: string) {
  this.filteredContacts = this.contacts.filter((contact) => {
    return (
      contact.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
      (contact.firstName + ' ' + contact.lastName)
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      contact.cellNumber.includes(searchValue)
    );
  });
}
}