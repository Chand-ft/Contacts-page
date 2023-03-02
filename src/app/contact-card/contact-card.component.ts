import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() selectedContact:any
  contactSelected:any =false


  constructor( ) {}



  ngOnInit(): void {
    this.contactSelected = true
  }

}
