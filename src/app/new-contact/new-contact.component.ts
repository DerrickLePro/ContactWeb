import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactsService} from '../../services/contacts.service';
import {UploadFileService} from '../../services/upload-file.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:Contact = new Contact();
  mode:number=1;

  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }


  @Input() fileUpload: string;

  file1Upload: Observable<Object> ;

  constructor(public contactService:ContactsService, private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  saveContact(){
    this.upload();
    console.log(this.contact.photo);
    this.contactService.saveContact(this.contact)
      .subscribe(data=>{
        this.show1File(this.contact.photo);
       this.mode = 2;

       this.contact = data;

      }, error2 => {
        console.log(error2)
      })
  }



  selectFile(event) {
    const file = event.target.files.item(0)

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)

    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.contact.photo = this.currentFileUpload.name;
      }
    })

    this.selectedFiles = undefined
  }

  show1File(fileName: string){
    this.file1Upload = this.uploadService.getFile(fileName);
  }

}
