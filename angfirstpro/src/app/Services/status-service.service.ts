import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Status } from '../models/status.model';

const httpOption={
  headers:new HttpHeaders({'content-Type':'application/jsonm'})
};

@Injectable({
  providedIn: 'root'
})
export class StatusServiceService {

  constructor(private httpObj:HttpClient) { }
  private statusUrl= "http://localhost:8080/hrm_system/status";
  getAllStatus(){
    return this.httpObj.get<Status[]>(this.statusUrl);
  }
  createStatus(sta){
    return this.httpObj.post<Status>(this.statusUrl,sta);
  }
  deleteStatus(stas){
    return this.httpObj.delete<Status>(this.statusUrl+"/"+stas.id);
  }
  editStatus(sta){
    return this.httpObj.put<Status>(this.statusUrl+"/"+sta.id,sta);
  }
  
}