import {Component,  OnInit} from '@angular/core';
import {UploadImageService} from '../../services/upload-image.service';

@Component({
  selector: 'app-image-test',
  templateUrl: './image-test.component.html',
  styleUrls: ['./image-test.component.css']
})
export class ImageTestComponent implements OnInit {
  constructor(private  uploadImageServ: UploadImageService) { }
  title = 'Upload Image';
  description = 'Test upload files';


  ngOnInit() {

  }
  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }

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

    let formdata: FormData = new FormData();



    this.currentFileUpload = this.selectedFiles.item(0)
    formdata.append('file', this.currentFileUpload);
    console.log(formdata);
    console.log(this.currentFileUpload.name)
    this.uploadImageServ.uploadImage(formdata).subscribe( data =>{
               console.log(data);
    })

    this.selectedFiles = undefined
  }


}
