import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user.model';
const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userUrl='http://localhost:8080/hrm_system/user';
  constructor(private httpObj:HttpClient) { }

   createUser(user) {
    return this.httpObj.post<User>(this.userUrl, user);
  }
  getUser(){
    return this.httpObj.get<User>(this.userUrl);
  }
}
