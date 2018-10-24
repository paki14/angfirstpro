import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApplyLeaveService {

  constructor(private httpObj:HttpClient) { }

  // sendLeave(leave){
  //   this.httpObj.po
  // }
 
}
