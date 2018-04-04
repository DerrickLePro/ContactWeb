import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ActivatedRoute} from '@angular/router';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
mode:number=1;
contact:Contact = new Contact();
idContact:number;
  constructor(public activatedRoute:ActivatedRoute,
              public  contactService:ContactsService) {
          this.idContact = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactService.getContact(this.idContact)
      .subscribe(data=>{
        this.contact = data;
      }, error2 => {
        console.log(error2);
      })
  }
  updateContact(){
    this.contactService.updateContact(this.contact)
      .subscribe(data=>{
        this.contact = data;
      }, error2 => {
        console.log(error2);
      })
  }
}
