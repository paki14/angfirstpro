import { Component, OnInit } from '@angular/core';
import { Status } from '../models/status.model';
import { StatusServiceService } from '../Services/status-service.service';

@Component({
  selector: 'app-admin-status',
  templateUrl: './admin-status.component.html',
  styleUrls: ['./admin-status.component.css']
})
export class AdminStatusComponent implements OnInit {
  statusObj:Status = new Status();
  statuses:Status[];
  constructor( private statusService:StatusServiceService) { }

  ngOnInit() {
    this.getAdminStatus();
  }
  getAdminStatus(){
    return this.statusService.getAllStatus().subscribe(ads=>{
      // console.log(ads);
      this.statuses=ads;
    });
  }
  addAdminStatus(){
    return this.statusService.createStatus(this.statusObj).subscribe(st=>{
      // alert("Status added");
      this.getAdminStatus();
    });
  }
  deleteStatus(){
    return this.statusService.deleteStatus(this.statusObj).subscribe(st=>{
      // alert("Status deleted");
      this.getAdminStatus();
    });
  }
  deleteId(did){
    this.statusObj=Object.assign({},did);
  }
  editStatu(){
    return this.statusService.editStatus(this.statusObj).subscribe(ads=>{
      // alert("SDG");
      this.getAdminStatus();
      
    })
  }
}
