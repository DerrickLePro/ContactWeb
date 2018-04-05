import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class commonService {
  _url: string;
  constructor(private http: Http) { }

  uploadFile(data: any): Observable<{}> {
    this._url = 'http://localhost:4200/XXXXXXXXXX/uploadFile';
    return this.http.post(this._url, data)
      .map(this.handleData)
      .catch(this.handleError);
  }

  private handleData(res: Response) {
    let data = res.json();
    return data;
  }
  private handleError(error: Response | any) {
    return Observable.throw('API failed');
  }
}
