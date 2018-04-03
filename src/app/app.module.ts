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


const appRoutes:Routes = [
  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'', redirectTo:'/about',pathMatch:'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(appRoutes), HttpModule, FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
