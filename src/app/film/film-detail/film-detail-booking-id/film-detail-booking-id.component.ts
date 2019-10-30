import { Component, OnInit } from '@angular/core';
import { VeService } from "../../../ve/shared/ve.service";
import { Ve } from "../../../ve/shared/ve.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'bwm-film-detail-booking-id',
  templateUrl: './film-detail-booking-id.component.html',
  styleUrls: ['./film-detail-booking-id.component.css']
})
export class FilmDetailBookingIdComponent implements OnInit {
  ve: Ve

  constructor(public veService: VeService,
            public route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params)=>{
        this.getVeById(params['id']);
      }
    )

  }

  // getVeById
  public getVeById(veId: string){
    this.veService.getVeById(veId).subscribe(
      (ve: Ve) =>{
        this.ve=ve;
      }
    )

}
}
