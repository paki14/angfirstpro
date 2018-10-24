import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { LeaveType } from '../models/leave-type.model';


const httpOption={
  headers: new HttpHeaders({'content-type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {

  constructor(private httpObj:HttpClient) { }

  private leaveTypeUrl="http://localhost:8080/hrm_system/leavetype"
  getAllLeaveType(){
    return this.httpObj.get<LeaveType[]>(this.leaveTypeUrl);
  }
  createLeaveType(lty){
    return this.httpObj.post<LeaveType>(this.leaveTypeUrl,lty);
  }
  deleteLeaveType(dep){
    return this.httpObj.delete<LeaveType>(this.leaveTypeUrl+"/"+dep.id);
  }
  editLeaveType(edi){
    return this.httpObj.put<LeaveType>(this.leaveTypeUrl+"/"+edi.id,edi);
  }
}
