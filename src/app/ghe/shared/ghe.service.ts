import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ghe } from './ghe.model';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";


@Injectable()
export class GheService {
  constructor(private http: HttpClient){

  }

  public getGheById(gheId: string): Observable<any> {
    return this.http.get(environment.API_URL+'/api/v1/ghes/'+ gheId); 
   
  }

  public getGhes(): Observable<any> {
    return this.http.get(environment.API_URL+'/api/v1/ghes');

   
  }




}