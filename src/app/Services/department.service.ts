import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Department } from '../models/department.model';

const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpObj:HttpClient) { }

  private depUrl='http://localhost:8080/hrm_system/department';

  getAllDepartment(){
    return this.httpObj.get<Department[]>(this.depUrl);
  }
  createDepartment(data){
    return this.httpObj.post<Department>(this.depUrl,data);
  }
  deleteDepertment(num){
    return this.httpObj.delete<Department>(this.depUrl+"/"+num.id);
  }
  editDepartment(edit){
    return this.httpObj.put<Department>(this.depUrl+"/"+edit.id,edit);
  }
  // updateDepartment(upd){
  //   return this.httpObj.put<Department>(this.depUrl,upd);
  // }
  
  getDepartmentDetail() {
    return this.httpObj.get<Department[]>(this.depUrl);
  }
  
}
