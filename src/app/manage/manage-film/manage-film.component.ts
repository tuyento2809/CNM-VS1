import { Component, OnInit } from '@angular/core';
import { FilmService } from "../../film/shared/film.service";
import { Film } from "../../film/shared/film.model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bwm-manage-film',
  templateUrl: './manage-film.component.html',
  styleUrls: ['./manage-film.component.css']
})
export class ManageFilmComponent implements OnInit {

  films: Film[];
  filmDeleteIndex: number;

  constructor(private toastr: ToastrService,private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getFilmManager().subscribe(
      (films: Film[])=>{
        this.films=films;
        console.log(films);
        
      },()=>{

      }
    )
  }

  deleteFilm(filmId: string){
    this.filmService.deleteFilm(filmId).subscribe(
      ()=>{
        this.films.splice(this.filmDeleteIndex,1);
        this.filmDeleteIndex= undefined;
        this.toastr.success('Xóa Phim ','Thành Công');
      
      },()=>{
        this.toastr.error('Xóa Phim ','Thất Bại');
      }
    )
  }

}
