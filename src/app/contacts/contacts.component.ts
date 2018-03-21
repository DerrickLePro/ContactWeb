import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact = {name:"Paterson", email:"pat@gmail.com"}
  constructor() { }

  ngOnInit() {
  }

}
