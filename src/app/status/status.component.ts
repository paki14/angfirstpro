import { Component, OnInit } from '@angular/core';
import { Status } from '../models/status.model';
import { StatusServiceService } from '../Services/status-service.service';
import { LeaveTypeService } from '../Services/leave-type.service';
import { LeaveType } from '../models/leave-type.model';
import { UserStatusService } from '../Services/user-status.service';
import { UserStatus } from '../models/user-status.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  statusObj:Status = new Status();
  leaveObj:LeaveType= new LeaveType();
  statuses:Status[];
  leaves:any=[];
  leave:any=[];
  percentage: number;

  
  

  remainDay:any=UserStatus;
  constructor( 
    private statusService:StatusServiceService,
    private leaveTypeService:LeaveTypeService,
    private userStatusService:UserStatusService
    ) { }

  ngOnInit() {
    this.getStatus();
    this.getLeaveType();
    this.getRemainingDays()
  }

  getStatus(){
    this.statusService.getAllStatus().subscribe(sta=>{
      console.log(sta);
      this.statuses=sta;
    });
  }
  getLeaveType(){
    this.leaveTypeService.getAllLeaveType().subscribe(lty=>{
      console.log(lty);
      this.leaves=lty;
    });
  }
 
  getRemainingDays(){
    this.userStatusService.getStatusRemainDays().subscribe(rts=>{
      console.log(rts);
      this.leaves=rts;

      this.percentage = (this.leaves.remainingDays / this.leaves.allocationDays)*100
    });
  }

}
