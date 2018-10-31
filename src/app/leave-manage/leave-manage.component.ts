import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { ApplyLeaveService } from '../Services/apply-leave.service';
import { ApplyLeave } from 'src/app/models/apply-leave.models';
import { LoginService } from '../Services/login.service';
import { LeaveManage } from '../models/leave-manage.model';

@Component({
  selector: 'app-leave-manage',
  templateUrl: './leave-manage.component.html',
  styleUrls: ['./leave-manage.component.css']
})
export class LeaveManageComponent implements OnInit {

  leaveRequests: ApplyLeave[];
  leaveRequestManageObj = new LeaveManage();
  firstName: string;
  lastName: string;

  constructor(private loginService:LoginService,
     private leaveRequestService: ApplyLeaveService, 
     ) { }

  ngOnInit() {
    this.getAllLeaveRequest();
  }

  getAllLeaveRequest() {
    this.leaveRequestService.getAllLeaves()
      .subscribe(data => {
        this.leaveRequests = data;
        console.log(data);
      });
  }

  approveLeave(lvRequestId) {
    this.leaveRequestManageObj.leaveRequestId = lvRequestId;
    this.leaveRequestManageObj.processedBy = 2;
    this.leaveRequestManageObj.statusId = 1;
    this.leaveRequestManageObj.rejectreason = null;
    // console.log(this.leaveRequestManageObj);
    this.leaveRequestService.approvedLeaveRequest(this.leaveRequestManageObj).subscribe(data => {
      
      this.getAllLeaveRequest();
    });
  }

  getLeaveRejectId(lvRequestId) {
    this.leaveRequestManageObj.leaveRequestId = lvRequestId;
    this.leaveRequestManageObj.processedBy = 1;
    this.leaveRequestManageObj.statusId = 2;
    this.leaveRequestManageObj.rejectreason=null;
    console.log(this.leaveRequestManageObj);
  }

  rejectLeave(lvRequestId) {
    console.log(this.leaveRequestManageObj);
    this.leaveRequestManageObj.leaveRequestId = lvRequestId;
    this.leaveRequestManageObj.processedBy = 2;
    this.leaveRequestManageObj.statusId = 2;
    this.leaveRequestManageObj.rejectreason = this.leaveRequestManageObj.rejectreason;
    this.leaveRequestService.rejectLeaveRequest(this.leaveRequestManageObj).subscribe(
      data => {
        
        this.getAllLeaveRequest();
      }
    );
  }

 

}
