import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';

@Component({
  selector: 'app-form-data-upload',
  templateUrl: './form-data-upload.component.html',
  styleUrls: ['./form-data-upload.component.css']
})
export class FormDataUploadComponent implements OnInit {
  constructor(private _service: CommonService) { }

  upload(event: any) {
    let files = event.target.files;
    let fData: FormData = new FormData;

    for (var i = 0; i < files.length; i++) {
      fData.append("file[]", files[i]);
    }
    var _data = {
      filename: 'Sample File',
      id: '0001'
    }

    fData.append("data", JSON.stringify(_data));

    this._service.uploadFile(fData).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    )
  }
  handleResponse(response: any) {
    console.log(response);
  }
  handleError(error: string) {
    console.log(error);
  }


  ngOnInit() {
  }

}
