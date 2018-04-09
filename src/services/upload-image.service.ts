import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export  class UploadImageService{
  constructor(private _http: Http){}

  public uploadImage(formdata: any){
    let  _url: string = 'http://localhost:8080/upload';
    return this._http.post(_url, formdata);
  }

  private  _errorHandler(error: Response){
    console.error('Error Occured: ' + error);
    return Observable.throw(error || 'Some Error on Server Occured');
  }

  public getFilesList(){
    let _url: string = 'http://localhost:8080/getallfiles';
     return this._http.get(_url);
  }
}
