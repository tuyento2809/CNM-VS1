import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from './film.model';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";


@Injectable()
export class FilmService {
  constructor(private http: HttpClient){

  }

  public getPhimById(filmId: string): Observable<any> {
    return this.http.get(environment.API_URL+'/api/v1/films/'+ filmId); 
   
  }

  public getFilms(): Observable<any> {
    return this.http.get(environment.API_URL+'/api/v1/films');

  }

  public getFilmsByTenPhim(tenPhim: string): Observable<any> {
    return this.http.get(environment.API_URL+`/api/v1/films?tenPhim=${tenPhim}`);

  }

  public createFilm(filmdata: any): Observable<any>{
    return this.http.post(environment.API_URL +'/api/v1/films',filmdata);
  }

  public getFilmManager(): Observable<any>{
    return this.http.get(environment.API_URL+'/api/v1/films/manage');
  }

  public deleteFilm(filmId: string): Observable<any>{
    return this.http.delete(environment.API_URL+`/api/v1/films/${filmId}`);
  }

  public updateFilm(filmId: string,filmData: any): Observable<any>{
    return this.http.patch(environment.API_URL+`/api/v1/films/${filmId}`,filmData);
  }

}