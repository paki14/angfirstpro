import { Component, OnInit } from '@angular/core';
import { ApplyLeave } from 'src/app/models/apply-leave.models';
import { ApplyLeaveService } from 'src/app/Services/apply-leave.service';
import { LeaveTypeService } from 'src/app/Services/leave-type.service';
import { LeaveType } from 'src/app/models/leave-type.model';
import { StatusServiceService } from 'src/app/Services/status-service.service';
import { Status } from 'src/app/models/status.model';
import { concat } from 'rxjs';

@Component({
  selector: 'app-view-leave-type',
  templateUrl: './view-leave-type.component.html',
  styleUrls: ['./view-leave-type.component.css']
})
export class ViewLeaveTypeComponent implements OnInit {

  constructor(
    private viewLeaveService:ApplyLeaveService,
    private leaveTypeService:LeaveTypeService,
    private statusService:StatusServiceService

    ) { }

  ngOnInit() {
    this.getViewLeave();
  }
  viewLeaveObj:ApplyLeave=new ApplyLeave();
  viewLeaves:ApplyLeave[];
  leaveTypes:LeaveType[];
  statuses:Status[];

 
  // angularmerge= viewLeaves.concat(leaveTypes);

  getViewLeave(){
    return this.viewLeaveService.getAllLeaves().subscribe(asd=>{
      this.viewLeaves=asd;
      console.log(asd);
      // alert("test");
    })
  }
  getLeaveType(){
    return this.leaveTypeService.getAllLeaveType().subscribe(del=>{
      this.leaveTypes=del;
  

    })
  }
  deleteLeaveRequest(){
    return this.deleteLeaveRequest().subscribe(del=>{
      alert("LEave Deleted");
      this.viewLeaves=del;
      this.getViewLeave();
    })
  }
  viewLeaveId(id){
    // alert("id");
    this.viewLeaveObj=Object.assign({},id);
    // console.log(this.viewLeaveObj);
  }

  viewStatus(){
    return this.statusService.getAllStatus().subscribe(sta=>{
      this.statuses=sta;
    })
  }


}
