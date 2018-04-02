import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import  "rxjs/add/operator/map";
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  constructor(private http:Http, public contactService:ContactsService) { }

  ngOnInit() {
    console.log("Initialisation...")
    this.contactService.getContacts()
        .subscribe(data=>{
        this.pageContacts = data;
      }, error2 => {
        console.log(error2);
      })
  }

}
