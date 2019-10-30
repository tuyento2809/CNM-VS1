import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";


@Injectable()
export class TheLoaiService {
  constructor(private http: HttpClient){

  }

  public getTheLoaiById(theLoaiId: string): Observable<any> {
    return this.http.get(environment.API_URL+'/api/v1/theloais/'+ theLoaiId); 
   
  }

  public getTheLoais(): Observable<any> {
    return this.http.get(environment.API_URL+'/api/v1/theloais');

   
  }




}