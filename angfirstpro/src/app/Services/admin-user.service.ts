import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { AdminUser } from '../models/admin-user.model';

const httpOption={
  headers:new HttpHeaders({'content-type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AdminUserService {

  constructor(private httpObj:HttpClient) { }

  private userUrl= "http://localhost:8080/hrm_system/user";

  getAllUser(){
    return this.httpObj.get<AdminUser[]>(this.userUrl);
  }
  createUser(cre){
    return this.httpObj.post<AdminUser>(this.userUrl,cre);
  }
 
  
}
