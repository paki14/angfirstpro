import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from 'src/app/Services/leave-type.service';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { HttpClient } from '@angular/common/http';
import { ApplyLeave } from 'src/app/models/apply-leave.models';
import { ApplyLeaveService } from 'src/app/Services/apply-leave.service';
import { LeaveType } from 'src/app/models/leave-type.model';
import { StatusServiceService } from 'src/app/Services/status-service.service';
import { Status } from 'src/app/models/status.model';
import { LoginService } from 'src/app/Services/login.service';
import { UserStatusService } from 'src/app/Services/user-status.service';

@Component({
  selector: 'app-add-leave-type',
  templateUrl: './add-leave-type.component.html',
  styleUrls: ['./add-leave-type.component.css']
})
export class AddLeaveTypeComponent implements OnInit {
  public msg: string = "test";

  leaveTypes: LeaveType[];

  applyLeaveObj: ApplyLeave = new ApplyLeave();
  applyLeaves: ApplyLeave[];
  status: Status[];
  leaves: LeaveType[];
  userId: number;
  leaveTId: number;
  raDay: number


  constructor(
    private applyLeaveService: ApplyLeaveService,
    private leaveService: LeaveTypeService,
    private statusService: StatusServiceService,
    private loginService: LoginService,
    private userStatusService: UserStatusService
  ) { }

  ngOnInit() {
    this.viewLeaveType();
    this.getUserId();
    this.getLeaveRequestId();
    // this.getRemainingDay();


  }
  onSubmit() {
    // var startDate = new Date(this.applyLeaveObj.startDate);
    // var endDate = new Date(this.applyLeaveObj.endDate);

    // var leDays = Math.abs(endDate.getDate()-startDate.getDate());
    // console.log(leDays);
  }

  addStatus() {
    this.statusService.getAllStatus().subscribe(lt => {
      this.status = lt;
    })
  }

  viewLeaveType() {
    return this.leaveService.getAllLeaveType().subscribe(acd => {
      this.leaveTypes = acd;
    });
  }
  getUserId() {
    this.loginService.loginCredential$.subscribe(data => {
      if (data != null) {
        this.userId = data.userId;

        console.log(this.userId);
      }
    });
  }
      getLeaveRequestId(){
        this.leaveService.lleaveType$.subscribe(data => {
          if (data != null) {
            this.leaveTId = data.leaveTypeId;
            console.log(this.leaveTId);
          }
        });
      }
        
  getRemainingDay(){
    this.getUserId();
    this.getLeaveRequestId();
  this.userStatusService.getRemainingDayByUserId(this.userId, this.leaveTId).subscribe(dat => {
    if (dat != null) {
    this.raDay = dat.remainingDays;
    console.log(this.raDay);
    }
  });
}

  applyLeaveRequest(){
    // alert("leave Applied");
    this.applyLeaveObj.startDate = new Date(this.applyLeaveObj.startDate);
    this.applyLeaveObj.endDate= new Date(this.applyLeaveObj.endDate);
    // this.applyLeaveObj.leaveTypeId = 1;
    this.applyLeaveObj.userId=this.userId;
    console.log(this.applyLeaveObj);
    this.applyLeaveObj.statusId = 3;

    var startDate = new Date(this.applyLeaveObj.startDate);
    var endDate = new Date(this.applyLeaveObj.endDate);

    var leDays = Math.abs(endDate.getDate()-startDate.getDate());
    console.log(leDays);
    this.applyLeaveObj.leaveDays=leDays;

    this.applyLeaveService.applyLeave(this.applyLeaveObj).subscribe(data => {
      alert("leave Applied");
      console.log(data);
      this.applyLeaveObj = data;
      // this.applyLeaveObj.leaveTypeId=2;
      // this.applyLeaveObj.userId=data.userId;
      
    },
    error=>{
      console.log(error);
    });
  }


  clear() {
    this.applyLeaveObj.userId = null;
    this.applyLeaveObj.leaveTypeId = null;
    this.applyLeaveObj.startDate = null;
    this.applyLeaveObj.endDate = null;
    this.applyLeaveObj.reason = null;

  }



  // constructor(private httpObj:HttpClient,
  //   private leaveService:LeaveTypeService, 
  //     private userService:UserServiceService){}

  //     addNewLeaveRequest = function(leaveRequest){
  //   this.leaveRequestObj={
  //     "leaveStartDate":leaveRequest.leaveStartingDate,
  //     "leaveEndDate":leaveRequest.leaveEndingDate,
  //     "leaveDays":2,
  //     "reason":leaveRequest.leaveReason,
  //     "leaveType":leaveRequest.leaveType,
  //     "leaveApplierId":2.

  //   }
  //   this.httpObj.post( "http://localhost:8080/hrm_system/leaverequest" ,this.leaveRequestObj).subscribe(response=>{
  //     alert("leave Request Added");
  //     console.log(response);
  //   })
  // }
}
