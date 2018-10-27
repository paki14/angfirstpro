import { Component, OnInit } from '@angular/core';
import { LeaveType } from '../models/leave-type.model';
import { LeaveTypeService } from '../Services/leave-type.service';

@Component({
  selector: 'app-admin-leave',
  templateUrl: './admin-leave.component.html',
  styleUrls: ['./admin-leave.component.css']
})
export class AdminLeaveComponent implements OnInit {
  leaveTypeObj: LeaveType = new LeaveType;
  leaveTypes:LeaveType[];
  constructor( private leaveTypeservice:LeaveTypeService) { }

  ngOnInit() {
    this.getLeaveType();
  }

  getLeaveType(){
    return this.leaveTypeservice.getAllLeaveType().subscribe(lt=>{
      // console.log(lt);
      this.leaveTypes=lt;
    });
  }
  addLeaveType(){
    return this.leaveTypeservice.createLeaveType(this.leaveTypeObj).subscribe(les=>{
      // alert("Leave Type Added");
      // console.log(les);
      this.getLeaveType();

    });
  }
  deleteLeaveType(){
    return this.leaveTypeservice.deleteLeaveType(this.leaveTypeObj).subscribe(asd=>{
      // alert("Leave Type Deleted");
      this.getLeaveType();
    });
  }
  deleteId(did){
    this.leaveTypeObj=Object.assign({},did);
  }
  editLeaveType(){
    return this.leaveTypeservice.editLeaveType(this.leaveTypeObj).subscribe(ad=>{
      this.getLeaveType();
    })
  }

  clear(){
    this.leaveTypeObj.id=null;
    this.leaveTypeObj.leaveType=null;
  }

}
