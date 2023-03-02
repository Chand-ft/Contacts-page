import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactsServiceService } from '../contacts-service.service';
import { MatDialog } from '@angular/material/dialog';
// import { AddContactDialogComponent } from '../add-contact-dialog-component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddContactDialogComponentComponent } from '../add-contact-dialog-component/add-contact-dialog-component.component';



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
  constructor(private contactsService: ContactsServiceService, public dialog: MatDialog) {}
  

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
  
//   //TODO Partition names individually 

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
      console.log("names",this.contacts)
    });
  }

  selectCard(contact:any){
    this.selectedContact = contact;
    this.fetchAge();
  }
  fetchAge(){
    this.contactsService.getAge(this.selectedContact.firstName).subscribe(data =>
      this.selectedContact.age = data["age"]
  )}

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
  }
  );
}

openAddContactDialog(): void {
  const dialogRef = this.dialog.open(AddContactDialogComponentComponent, {
    width: '600px',
    height: 'auto',
    data: {} // You can pass data to the dialog using this property
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed', result);

    // You can do something after the dialog is closed here
  });
}

}

