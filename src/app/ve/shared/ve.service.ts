import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";


@Injectable()
export class VeService {
  constructor(private http: HttpClient){

  }

  public themVe(veData: any): Observable<any>{
    return this.http.post(environment.API_URL+'/api/v1/ves',veData);
  }


  public getVeById(veId: string): Observable<any> {
    return this.http.get(environment.API_URL+'/api/v1/ves/'+ veId); 
   
  }

  public getVes(): Observable<any> {
    return this.http.get(environment.API_URL+'/api/v1/ves');
   
  }

  public thongKeVe():Observable<any> {
    return this.http.get(environment.API_URL+'/api/v1/ves/thongke');
   
  }


}