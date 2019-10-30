import { Component, OnInit } from '@angular/core';
import { FilmService } from "../shared/film.service";
import { Film } from "../shared/film.model";

@Component({
  selector: 'bwm-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  films: Film[]=[];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    const filmObservable=this.filmService.getFilms();

    filmObservable.subscribe(
      (films: Film[]) =>{
        this.films=films;

      },
      (err) =>{

      },
      () =>{

      }

    );
  }

}
