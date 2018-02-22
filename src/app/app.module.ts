import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ContactsModule} from './contacts/contacts.module';
import {ContactsService} from './contacts/contacts.service';
import {HttpModule} from '@angular/http';
import {CoreModule} from './core-module/core.module';
import {AppRoutingModule} from './app-routing.module';
import {ContactsRoutingModule} from './contacts/contacts-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactsModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    ContactsRoutingModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
