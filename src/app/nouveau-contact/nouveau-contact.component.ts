import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactService:ContactsService) { }

  ngOnInit() {

  }

  onSaveContact(datForm){
    this.contactService.saveContact(datForm)
      .subscribe(data=>{
        console.log("Ok")

      }, error2 => {
        console.log(JSON.parse(error2._body).message)
      })
  }

}
