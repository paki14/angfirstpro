import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApplyLeave } from '../models/apply-leave.models';


const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApplyLeaveService {

  constructor(private httpObj:HttpClient) { }
  private applyUrl="http://localhost:8080/hrm_system/leaverequest";
  
  // applyLeave(ley){
  //   return this.httpObj.post<ApplyLeave>(this.applyUrl,ley);
  // }

  public applyLeave(leaveRequest) {
    return this.httpObj.post<ApplyLeave>(this.applyUrl, leaveRequest);
  }

  getAllLeaves(){
    return this.httpObj.get<ApplyLeave[]>(this.applyUrl);
  }

  public getLeaveHistoryByUserId(empId) {
    return this.httpObj.get<ApplyLeave[]>(this.applyUrl + "/user/" + empId);
  }
  public createLeaveRequest(leaveRequest) {
    return this.httpObj.post<ApplyLeave>(this.applyUrl, leaveRequest);
  }

  public approvedLeaveRequest(processLeaveRequest) {
    return this.httpObj.post<ApplyLeave>(this.applyUrl + "/leaveapprove", processLeaveRequest);
  }

  public rejectLeaveRequest(processLeaveRequest) {
    return this.httpObj.post<ApplyLeave>(this.applyUrl + "/rejectleave", processLeaveRequest);
  }

  deleteViewLeave(num){
    return this.httpObj.delete<ApplyLeave>(this.applyUrl+"/deleteRequest"+"/"+num.id);
  }
  

  // sendLeave(leave){
  //   this.httpObj.po
  // }
 
}
