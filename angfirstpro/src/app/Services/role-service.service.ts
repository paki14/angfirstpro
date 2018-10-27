import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Role } from '../models/role';
const httpOption={
  headers:new HttpHeaders({'content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private httpObj:HttpClient) { }

  private roleUrl= "http://localhost:8080/hrm_system/role";


  getAllRole(){
    return this.httpObj.get<Role[]>(this.roleUrl);
  }
  createRole(data){
    return this.httpObj.post<Role>(this.roleUrl,data);
  }
  deleteRole(num){
    return this.httpObj.delete<Role>(this.roleUrl+"/"+num.id);
  }
  editRole(edt){
    return this.httpObj.put<Role>(this.roleUrl+"/"+edt.id,edt)
  }
  
}
