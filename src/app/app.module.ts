import   { BrowserModule } from '@angular/platform-browser';
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
import { ImageTestComponent } from './image-test/image-test.component';
import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { ListUploadComponent } from './list-upload/list-upload.component';
import {HttpClientModule} from '@angular/common/http';
import {UploadFileService} from '../services/upload-file.service';
import {UploadImageService} from '../services/upload-image.service';
import { UploadImgeComponent } from './upload-imge/upload-imge.component';
import {FormDataUploadComponent} from './form-data-upload/form-data-upload.component';


const appRoutes:Routes = [
  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'new-contact', component:FormDataUploadComponent},
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
    ImageTestComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    UploadImgeComponent

  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(appRoutes), HttpModule, FormsModule,
    NgbModule.forRoot(), HttpClientModule
  ],
  providers: [ContactsService, UploadFileService, UploadImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
