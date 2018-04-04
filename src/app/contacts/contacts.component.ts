import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import  "rxjs/add/operator/map";
import {ContactsService} from '../../services/contacts.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  totalPage:number=0;
  pages:any;
  page:number=1;
  collectSize:number=0;
  mode:number=0;
  currentIndex:number=0;
  constructor(private http:Http, public contactService:ContactsService,
              public  router:Router) { }

  ngOnInit() {

  }



  doSearch(){
    this.contactService.getContacts(this.motCle,this.currentPage,this.size)
      .subscribe(data=>{
        this.pageContacts = data;
        this.pages = new Array(data.totalPages);
        this.collectSize = (data.totalPages) * 10;
        this.totalPage = data.totalPages;
        console.log("Max size " + this.collectSize);

      }, error2 => {
        console.log(error2);
      })
  }
  chercher(){
    this.doSearch();
    this.mode=1;
  }


  gotoPage(i:number){
   this.currentIndex = i - 1;
   if(this.currentIndex<0){
     this.currentIndex = 0;
   }
  this.currentPage = this.currentIndex;
  this.doSearch();
  }

  gotoPagePrevious(){
    this.currentPage = this.currentPage -1;
    if(this.currentPage < 0){
      this.currentPage = 0;
    }
    this.doSearch();
  }

  gotoPageNext(){
    this.currentPage = this.currentPage + 1;
    if(this.currentPage > this.pages){
      this.currentPage = this.pages;
    }
    this.doSearch();
  }


  onEditContact(id:number){
      this.router.navigate(['editContact',id]);
  }





}
