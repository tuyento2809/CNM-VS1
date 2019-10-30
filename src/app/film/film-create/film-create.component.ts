import { Component, OnInit, Input } from '@angular/core';
import { Film } from "../shared/film.model";
import { FilmService } from "../shared/film.service";
import { TheLoai } from "../../theloai/shared/theloai.model";
import { TheLoaiService } from "../../theloai/shared/theloai.service";

import { Rap } from "../../rap/shared/rap.model";

import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute } from "@angular/router";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'bwm-film-create',
  templateUrl: './film-create.component.html',
  styleUrls: ['./film-create.component.css']
})
export class FilmCreateComponent implements OnInit {
  createFilmForm: FormGroup;

  newFilm: Film;
  //theloais: TheLoai[]=[];
  raps: Rap[]=[];
  theloais: TheLoai[]=[];
  


  constructor(
    private fb: FormBuilder,
    private theloaiService: TheLoaiService,
    public filmService: FilmService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {
    this.newFilm= new Film();
    this.initForm();
    this.getTheLoai();
  }


  initForm(){
    this.createFilmForm= this.fb.group({
      tenPhim: ['',Validators.required],
      theloai: ['',Validators.required],
      gia: ['',Validators.required],
      moTa: ['',Validators.required],
     // hinh:['',Validators.required]
    })
  }

  getTheLoai(){
    const theloaiObservable= this.theloaiService.getTheLoais();

      theloaiObservable.subscribe((theloais:TheLoai[])=>{
        console.log(theloais);
        
        this.theloais=theloais;
        
      })
  }
   //upload image 
   handleImageUpload(imageUrl: string){
    this.newFilm.hinh= imageUrl;

  }  
  handleImageError(){
    this.newFilm.hinh='';
  }

  //////////////////
  createFilm(){
    
    this.filmService.createFilm({
      tenPhim: this.createFilmForm.controls['tenPhim'].value,
      mota: this.createFilmForm.controls['moTa'].value,
      gia: this.createFilmForm.controls['gia'].value,
      hinh: this.newFilm.hinh,
      theloai: this.createFilmForm.controls['theloai'].value

    }).subscribe((filmData: any)=>{
      //console.log(filmData);
      
      this.toastr.success('Thêm Phim Mới ','Thành Công');
      this.router.navigate([`/films/${filmData._id}`]);
    },err=>{
      console.log(err);
      console.log( this.newFilm.hinh);
      console.log(this.createFilmForm);
      
      
      this.toastr.error('Thêm phim mới','Thất Bại')
    });
    
  }



}
