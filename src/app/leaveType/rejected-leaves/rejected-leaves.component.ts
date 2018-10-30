import { Component, OnInit } from '@angular/core';
import { ApplyLeaveService } from 'src/app/Services/apply-leave.service';
import { LeaveTypeService } from 'src/app/Services/leave-type.service';
import { StatusServiceService } from 'src/app/Services/status-service.service';
import { LoginService } from 'src/app/Services/login.service';
import { ApplyLeave } from 'src/app/models/apply-leave.models';
import { LeaveType } from 'src/app/models/leave-type.model';
import { Status } from 'src/app/models/status.model';

@Component({
  selector: 'app-rejected-leaves',
  templateUrl: './rejected-leaves.component.html',
  styleUrls: ['./rejected-leaves.component.css']
})
export class RejectedLeavesComponent implements OnInit {
  constructor(
    private viewLeaveService:ApplyLeaveService,
    private leaveTypeService:LeaveTypeService,
    private statusService:StatusServiceService,
    private loginService:LoginService

    ) { }

  ngOnInit() {
    this.getViewLeave();
  }
  viewLeaveObj:ApplyLeave=new ApplyLeave();
  viewLeaves:ApplyLeave[];
  leaveTypes:LeaveType[];
  statuses:Status[];
  userId:number;


  getUserId() {
    this.loginService.loginCredential$.subscribe(data => {
      if (data != null) {
        this.userId = data.userId;

        console.log(this.userId);
      }
    });
  }
 
  // angularmerge= viewLeaves.concat(leaveTypes);

  getViewLeave(){
    // this.viewLeaveObj.userId=this.userId; 
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
