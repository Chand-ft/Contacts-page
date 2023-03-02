import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule } from '@angular/common/http';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { AddContactDialogComponentComponent } from './add-contact-dialog-component/add-contact-dialog-component.component';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutMeComponent,
    BaseLayoutComponent,
    ContactCardComponent,
    AddContactDialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

