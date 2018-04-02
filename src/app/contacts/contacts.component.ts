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
  motCle:string="";
  page:number=0;
  size:number=5;
  pages:any;
  curentIndex:number=0;
  constructor(private http:Http, public contactService:ContactsService) { }

  ngOnInit() {

  }

  doSearch(){
    this.contactService.getContacts(this.motCle,this.page,this.size)
      .subscribe(data=>{
        this.pageContacts = data;
        this.pages = new Array(data.totalPages);
      }, error2 => {
        console.log(error2);
      })
  }
  chercher(){
    this.doSearch();
  }

}
