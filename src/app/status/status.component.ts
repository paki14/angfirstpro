import { Component, OnInit } from '@angular/core';
import { Status } from '../models/status.model';
import { StatusServiceService } from '../Services/status-service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  statusObj:Status = new Status();
  statuses:Status[];

  constructor( private statusService:StatusServiceService) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus(){
    this.statusService.getAllStatus().subscribe(sta=>{
      console.log(sta);
      this.statuses=sta;
    });
  }

}
