import { Component, OnInit } from '@angular/core';
import { ApplyLeaveService } from '../Services/apply-leave.service';
import { LeaveTypeService } from '../Services/leave-type.service';
import { StatusServiceService } from '../Services/status-service.service';
import { LoginService } from '../Services/login.service';
import { ApplyLeave } from '../models/apply-leave.models';
import { LeaveType } from '../models/leave-type.model';
import { Status } from '../models/status.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
