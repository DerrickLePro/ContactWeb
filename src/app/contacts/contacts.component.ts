import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import  "rxjs/add/operator/map";
import {ContactsService} from '../../services/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contact';
import {UploadFileService} from '../../services/upload-file.service';
import {Observable} from 'rxjs/Observable';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  pageContacts:any;
  private _motCle:string="";
  currentPage:number=0;
  size:number=12;
  totalPage:number=0;
  pages:any;
  page:number=1;
  collectSize:number=0;
  mode:number=0;
  currentIndex:number=0;

  fileUpload: Observable<Object> ;
  constructor(private http:Http, public contactService:ContactsService,
              public  router:Router,
              private uploadService: UploadFileService) { }

  ngOnInit() {

  }


  set motCle(value: string) {
    this._motCle = value;
  }

  doSearch(){
    this.contactService.getContacts(this._motCle,this.currentPage,this.size)
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

  onDeleteContact(c:Contact){
    let  confim = window.confirm('Est vous sure?');
    if(confim==true){
      this.contactService.deleteContact(c.id)
        .subscribe(data=>{
          this.pageContacts.content.splice(
            this.pageContacts.content.indexOf(c), 1
          );
        }, error2 => {
          console.log(error2);
        });
    }
  }


  getImage(fileName:string): any{
    this.fileUpload = this.uploadService.getFile(fileName);
    this.fileUpload.forEach(etm=>{
      console.log(etm)
      return etm;
    });

  }





}
