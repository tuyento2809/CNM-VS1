import { Component, OnInit, Input, OnChanges,ViewContainerRef } from '@angular/core';
import { Film } from "../../shared/film.model";
import { Ve } from "../../../ve/shared/ve.model";
import { Rap } from "../../../rap/shared/rap.model";
import { RapService } from "../../../rap/shared/rap.service";
import { Ghe } from "../../../ghe/shared/ghe.model";
import { GheService } from "../../../ghe/shared/ghe.service";

import { Router,ActivatedRoute } from "@angular/router";
import { VeService } from "../../../ve/shared/ve.service";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bwm-film-detail-booking',
  templateUrl: './film-detail-booking.component.html',
  styleUrls: ['./film-detail-booking.component.css']
})
export class FilmDetailBookingComponent implements OnInit {

  veForm: FormGroup;

  raps: Rap[]=[];
  ghes: Ghe[]=[];
  newVe: Ve;

  errors: any[]=[];


  @Input() film: Film;
  @Input() price: number;
  @Input() ves: Ve[];
  @Input() rap: Rap;

  daterange: any = {};

  // xem dự án ban đầu để biết danh sách đầy đủ các tùy chọn
    // cũng có thể được thiết lập bằng dịch vụ cấu hình để áp dụng cho nhiều bộ chọn
    options: any = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
  };

  constructor(
              private fb: FormBuilder,
              public veService: VeService,
              private rapService: RapService,
              private gheService: GheService,
             
              private modalService: NgbModal,
              private toastr: ToastrService,
              private Vcr: ViewContainerRef,

              private router: Router,
              private route: ActivatedRoute
              ) {

                
               }

  ngOnInit() {
    this.initForm();
    //this.getVeOutDates();
    this.newVe= new Ve();
    this.getAllRap();
    this.getAllGhe();
  
  }

  initForm(){
    this.veForm= this.fb.group({
      // ngayChieu:['',Validators.required],
      gioChieu:['',Validators.required],
      rap:['',Validators.required],
      ghe:['',Validators.required]
    })
  }

  // private getVeOutDates(){
  //   if(this.ves && this.ves.length>0){
  //     this.ves.forEach((ve: Ve)=>{
  //       console.log(ve);
        
  //     })
  //   }
  // }

  openConfirmModal(content){
    //console.log(this.veForm.controls['gioChieu'].value.gio);
    console.log(this.veForm);
  
    this.modalService.open(content);
  }

  addNewVe(veData: any){
    //const dataRange= this.
  }
//them ve
  createVe(){
    
    this.veService.themVe({
      giaVe: this.film.gia,
      gioChieu: this.veForm.controls['gioChieu'].value.gio,
      phimId:this.film._id,
      soGhe: this.veForm.controls['ghe'].value,
      rapId: this.veForm.controls['rap'].value.id,
    } 
      ).subscribe((veData: any)=>{

       //console.log(veData);
      this.modalService.dismissAll();

      this.router.navigate([`/films/ves/${veData.ve._id}`]);

      this.toastr.success('Đặt Vé ','Thành Công');
      
 
    },err=>{
      console.log(err);
      this.toastr.error('Đặt Vé','Thất Bại')
    })

  }


  selected(value: any,datepicher?:any){
    this.newVe.giaVe=this.film.gia;
    
  }

  danhsachghe(ghes:[number]){
    if(!ghes){
      return [];
    }
    let newGhe:Number[]=[];
    for(let i=1;i<=36;i++){
      if(ghes.includes(i)){
        
      }else{
        newGhe.push(i);
      }
    }
    return newGhe;
  }

  

    // getAllRap
    public getAllRap(){
      const rapObservable= this.rapService.getRaps();

      rapObservable.subscribe((raps:Rap[])=>{

        this.raps=raps;
      })
    }

    // getAllGhe
    public getAllGhe(){
      const gheObservable= this.gheService.getGhes();

      gheObservable.subscribe((ghes:Ghe[])=>{
        this.ghes=ghes;
      })
    }


}
