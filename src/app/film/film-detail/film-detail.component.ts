import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FilmService } from '../shared/film.service';
import { Film } from '../shared/film.model';

@Component({
  selector: 'bwm-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit, OnChanges {

  currentId: string;
  film: Film;


  constructor(private route: ActivatedRoute,
    private filmService: FilmService
  ) { 

  }

  ngOnChanges(changes: SimpleChanges): void {
    

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

}
