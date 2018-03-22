import  { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';

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
    BrowserModule,  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
