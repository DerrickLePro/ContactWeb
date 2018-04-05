import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-data-upload',
  templateUrl: './form-data-upload.component.html',
  styleUrls: ['./form-data-upload.component.css']
})
export class FormDataUploadComponent implements OnInit {
  private fb: FormGroup;

  contructo(fb: FormGroup){
    this.fb = this.fb;
  }

  //fVals comes from HTML Form -> (ngSubmit)="postImage(form.value)"
  postImage(fVals){
    let body = new FormData();
    body.append('file', formValues.file);

    let httpRequest = httpclient.post(url, body);
    httpRequest.subscribe((response) =>{
      //..... handle response here
    },(error) => {
      //.....handle errors here
    });
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('file').setValue(file);
    }
  }
}
