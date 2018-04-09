import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class UploadFileService {

  constructor(private http: Http) {}

  private  _errorHandler(error: Response){
    console.error('Error Occured: ' + error);
    return Observable.throw(error || 'Some Error on Server Occured');
  }
  pushFileToStorage(file: File) {
    let formdata: FormData = new FormData();

    formdata.append('file', file);
    console.log(formdata);

    /* const req = new HttpRequest('POST', 'http://localhost:8080/post', formdata, {
     reportProgress: true,
     responseType: 'text'
   });
   */


    const req = new HttpRequest('POST', '#', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.post('http://localhost:8080/post', formdata);
  }



  getFiles(): Observable<Object> {
    return this.http.get('http://localhost:8080/getallfiles');
  }
}
