import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { AddContactDialogComponent } from '../add-contact-dialog-component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsServiceService } from '../contacts-service.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-contact-dialog-component',
  templateUrl: './add-contact-dialog-component.component.html',
  styleUrls: ['./add-contact-dialog-component.component.scss']
})
export class AddContactDialogComponentComponent implements OnInit {
  addContactsForm: any;
  contacts: any;
  filteredContacts: any;
  result: any;
  constructor(private http: HttpClient ,public dialog: MatDialog, private formBuilder: FormBuilder, private contactsService: ContactsServiceService) { }

  ngOnInit(): void {

    this.addContactsForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      cellNumber: ['', [Validators.pattern("^[0-9]*$")]],
      address: ['', [Validators.required, Validators.maxLength(255)]],
      bio: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }
  submitForm() {
    if (this.addContactsForm.valid) {
      console.log(this.addContactsForm.value);
      this.result = this.addContactsForm.value
    }
  }

  
// Submit form and store in either contacts.json local storage 
  onSubmit(addContactsForm: any) {
  const data = addContactsForm.value;
  this.http.post("assets/contacts.json", data).subscribe(response => {
    console.log('Form submitted successfully');
  }, error => {
    console.error('Error submitting form:', error);
  });

}

  

  getContactsData() {
    this.contactsService.getDataFromJson().subscribe((contacts: any) => {
      this.contacts = contacts;
      console.log("test 1", this.contacts)
      this.filteredContacts = contacts; // initialize filteredContacts to all contacts
      console.log("test 2", this.filteredContacts)
    });
  }
}
