import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from 'src/app/Services/leave-type.service';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { HttpClient } from '@angular/common/http';
import { ApplyLeave } from 'src/app/models/apply-leave.models';
import { ApplyLeaveService } from 'src/app/Services/apply-leave.service';
import { LeaveType } from 'src/app/models/leave-type.model';
import { StatusServiceService } from 'angfirstpro/src/app/Services/status-service.service';
import { Status } from 'angfirstpro/src/app/models/status.model';

@Component({
  selector: 'app-add-leave-type',
  templateUrl: './add-leave-type.component.html',
  styleUrls: ['./add-leave-type.component.css']
})
export class AddLeaveTypeComponent implements OnInit {
  public msg:string="test";
  
  leaveTypes:LeaveType[];

  applyLeaveObj:ApplyLeave=new ApplyLeave();
  applyLeaves:ApplyLeave[];

  constructor(
    private applyLeaveService:ApplyLeaveService,
    private leaveService:LeaveTypeService,
    ){}

  ngOnInit() {
    this.viewLeaveType();
  }

  addDepartment(){
    this.applyLeaveObj.startDate=new Date(this.applyLeaveObj.startDate);
    this.applyLeaveObj.endDate=new Date(this.applyLeaveObj.endDate);
    console.log(this.applyLeaveObj);
    return this.applyLeaveService.applyLeave(this.applyLeaveObj).subscribe(ad=>{
      alert("Leave Applyied");
      console.log(ad);
    })

    
  }

  viewLeaveType(){
    return this.leaveService.getAllLeaveType().subscribe(acd=>{
      this.leaveTypes=acd;
    });
  }

 
  clear(){
    this.applyLeaveObj.userId=null;
    this.applyLeaveObj.leaveTypeId=null;
    this.applyLeaveObj.startDate=null;
    this.applyLeaveObj.endDate=null;
    this.applyLeaveObj.reason=null;

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
