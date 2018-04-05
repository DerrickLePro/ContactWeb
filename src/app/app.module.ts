import  { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HttpModule} from '@angular/http';
import {ContactsService} from '../services/contacts.service';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { FormDataUploadComponent } from './form-data-upload/form-data-upload.component';


const appRoutes:Routes = [
  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'new-contact', component:NewContactComponent},
  {path:'editContact/:id', component:EditContactComponent},
  {path:'', redirectTo:'/about',pathMatch:'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent,
    FormDataUploadComponent

  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(appRoutes), HttpModule, FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
