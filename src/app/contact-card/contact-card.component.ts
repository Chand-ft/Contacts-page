import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  contactSelected:any =false
@Input() selectedContact:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedContact)
    this.contactSelected = true
  }

}
