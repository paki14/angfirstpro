import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from 'src/app/Services/leave-type.service';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { HttpClient } from '@angular/common/http';
import { ApplyLeave } from 'src/app/models/apply-leave.models';
import { ApplyLeaveService } from 'src/app/Services/apply-leave.service';
import { LeaveType } from 'src/app/models/leave-type.model';
import { StatusServiceService } from 'src/app/Services/status-service.service';
import { Status } from 'src/app/models/status.model';

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
  status:Status[];


  constructor(
    private applyLeaveService:ApplyLeaveService,
    private leaveService:LeaveTypeService,
    private statusService:StatusServiceService
    ){}

  ngOnInit() {
    this.viewLeaveType();

  }
  onSubmit(){
    var startDate = new Date(this.applyLeaveObj.startDate);
    var endDate = new Date(this.applyLeaveObj.endDate);

    var leDays = Math.abs(endDate.getDate()-startDate.getDate());
    console.log(leDays);

    
  }

  applyLeave(){
    //  this.applyLeaveObj.startDate=new Date(this.applyLeaveObj.startDate);
    // console.log(this.applyLeaveObj.startDate);
     // this.applyLeaveObj.endDate=new Date(this.applyLeaveObj.endDate);
    // this.applyLeaveObj.statusId=17;
    // console.log(this.applyLeaveObj);
   
    
  }
  addStatus(){
    this.statusService.getAllStatus().subscribe(lt=>{
      this.status=lt;
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
