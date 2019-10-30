import { Component, OnInit } from '@angular/core';
import { VeService } from "../../ve/shared/ve.service";
import { Ve } from "../../ve/shared/ve.model";




@Component({
  selector: 'bwm-manage-thongke',
  templateUrl: './manage-thongke.component.html',
  styleUrls: ['./manage-thongke.component.scss']
})
export class ManageThongkeComponent implements OnInit {
  ves: Ve[]=[]
 

  
  years: Array<String>= ["Số Lượng"]; // do cái này
  students=[
    {
      _id: '2019-11-10',
      total: [9]
    },
    {
      _id: '2019-11-11',
      total: [17]
    },
  ]

  chartItemClicked(event){
    console.log(event);
  }
  constructor(public veService: VeService) { }

  ngOnInit() {
    this.thongKeVe();
  }

  thongKeVe(){
    const veOnservable=this.veService.thongKeVe();
    veOnservable.subscribe((ves:Ve[])=>{
      // console.log(ves);
      this.ves=ves;
      console.log(ves);
    });
  }
 
 

  

}
