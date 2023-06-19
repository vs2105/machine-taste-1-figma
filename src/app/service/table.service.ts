import { Injectable } from '@angular/core';
import { Itable } from '../shared/model/users.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  tabledata:string=`${environment.baseurl}/posts`
  constructor(private _http:HttpClient) { }
 

  gettabledata():Observable<Itable[]>{
    return this._http.get<Itable[]>(this.tabledata)
  }

}
