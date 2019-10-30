import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FilmService } from '../shared/film.service';
import { Film } from '../shared/film.model';


@Component({
  selector: 'bwm-film-update',
  templateUrl: './film-update.component.html',
  styleUrls: ['./film-update.component.css']
})
export class FilmUpdateComponent implements OnInit {

  film: Film;


  constructor(private route: ActivatedRoute,
    private filmService: FilmService
  ) { 

  }



  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.getFilm(params['id']);
      })
     
      
  }

  getFilm(filmId: string) {
    this.filmService.getPhimById(filmId).subscribe(
      (film: Film) => {
        
        this.film = film;
        
      });
  }

  updateFilm(filmId: string,filmData: any){

    this.filmService.updateFilm(filmId, filmData).subscribe(
      (updatedFilm: Film)=>{
        this.film= updatedFilm;
      },
      ()=>{
        
      }
    )
    
  }



}
