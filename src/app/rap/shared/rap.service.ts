import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";


@Injectable()
export class RapService {
  constructor(private http: HttpClient){

  }

  public getRapById(rapId: string): Observable<any> {
    return this.http.get(environment.API_URL+'/api/v1/raps/'+ rapId); 
   
  }

  public getRaps(): Observable<any> {
    return this.http.get(environment.API_URL+'/api/v1/raps');

   
  }




}