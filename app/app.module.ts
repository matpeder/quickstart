import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }	 from '@angular/http';

import { AppComponent }  from './app.component';

import { ContactListComponent }  from './contact-list.component';
import { ContactItemComponent }  from './contact-item.component';

import { PeopleService }  from './people.service';

@NgModule({
  imports: [
  	BrowserModule,
  	HttpModule
  ],
  declarations: [
  	AppComponent,
  	ContactListComponent,
  	ContactItemComponent
  ],
  providers: [
  	PeopleService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
