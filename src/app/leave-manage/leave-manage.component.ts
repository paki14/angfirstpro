import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { ApplyLeaveService } from '../Services/apply-leave.service';
import { ApplyLeave } from 'angfirstpro/src/app/models/apply-leave.models';

@Component({
  selector: 'app-leave-manage',
  templateUrl: './leave-manage.component.html',
  styleUrls: ['./leave-manage.component.css']
})
export class LeaveManageComponent implements OnInit {

  constructor(
     private httpObj:HttpClient,
     private leaveRequestService:ApplyLeaveService
    ) { }
  leaveRequests:ApplyLeave[];
  ngOnInit() {
    // this.fetchdate();
    this.getAllLeaveRequest();

  }
  // fetchdate=function(){
  //   this.httpObj.get("http://localhost:8080/hrm_system/leaverequest").subscribe(res=>{
  //     console.log(res);
  //     this.leaveRequests=res;
  //   })
  // }
  getAllLeaveRequest(){
    return this.leaveRequestService.getAllLeaves().subscribe(ltr=>{
      this.leaveRequests=ltr;
      console.log(this.leaveRequests);
    })
  }

}
