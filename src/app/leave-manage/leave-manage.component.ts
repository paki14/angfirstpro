import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-leave-manage',
  templateUrl: './leave-manage.component.html',
  styleUrls: ['./leave-manage.component.css']
})
export class LeaveManageComponent implements OnInit {

  constructor( private httpObj:HttpClient) { }
  leaveRequests=[];
  ngOnInit() {
    this.fetchdate();
  }
  fetchdate=function(){
    this.httpObj.get("http://localhost:8080/hrm_system/leaverequest").subscribe(res=>{
      console.log(res);
      this.leaveRequests=res;
    })
  }
}
