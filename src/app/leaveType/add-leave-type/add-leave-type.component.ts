import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from 'src/app/Services/leave-type.service';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-leave-type',
  templateUrl: './add-leave-type.component.html',
  styleUrls: ['./add-leave-type.component.css']
})
export class AddLeaveTypeComponent implements OnInit {
  public msg:string="test";
  
  leaveTypes=[];
  ngOnInit() {
    this.viewLeaveType();
  }
  viewLeaveType(){
    return this.leaveService.getAllLeaveType().subscribe(acd=>{
      this.leaveTypes=acd;
    });
  }

  constructor(private httpObj:HttpClient,
    private leaveService:LeaveTypeService,
      private userService:UserServiceService){}

      addNewLeaveRequest = function(leaveRequest){
    this.leaveRequestObj={
      "leaveStartDate":leaveRequest.leaveStartingDate,
      "leaveEndDate":leaveRequest.leaveEndingDate,
      "leaveDays":5,
      "reason":leaveRequest.leaveReason,
      "leaveType":leaveRequest.leaveType,
      "leaveApplierId":1

    }
    this.httpObj.post( "http://localhost:8080/hrm_system/leaverequest/leaveapprove" ,this.leaveRequestObj).subscribe(response=>{
      alert("leave Request Added");
      console.log(response);
    })
  }
}
