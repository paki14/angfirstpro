import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { UserStatus } from '../models/user-status.model';



const httpOption={
  headers: new HttpHeaders({'content-type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  constructor(
    private httpObj:HttpClient
    ) { }

    private leaveTypeUrl='http://localhost:8080/hrm_system/leave';

    getStatusRemainDays(user){
      return this.httpObj.get<UserStatus[]>(this.leaveTypeUrl+"/"+user);
    }
    getRemainingDayByUserId(user,leave){
      return this.httpObj.get<UserStatus>(this.leaveTypeUrl+"/"+user+"/"+leave)
    }


}
