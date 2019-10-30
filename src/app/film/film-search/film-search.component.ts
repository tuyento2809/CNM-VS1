import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FilmService } from "../shared/film.service";
import { Film } from "../shared/film.model";

import { HttpErrorResponse } from "@angular/common/http";
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'bwm-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {

  tenPhim: string;
  films: Film[]= [];
  errors: any[] = [];

  constructor( private route: ActivatedRoute,
              private filmService: FilmService) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.tenPhim= params['tenPhim'];
      this.getFilms();
    })
  }

  getFilms(){
    this.errors=[];
    this.films=[];
    
    this.filmService.getFilmsByTenPhim(this.tenPhim).subscribe(
      (films: Film[])=>{
        this.films=films;
      },
      (errorRespone: HttpErrorResponse)=>{
        this.errors= errorRespone.error.errors;
      }
    )
  }

}
