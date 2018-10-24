import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private depUrl='http://localhost:8080/hrm_system/user';
  constructor(private httpObj:HttpClient) { }
}
