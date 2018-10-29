import { Component, OnInit } from '@angular/core';
import { Status } from '../models/status.model';
import { StatusServiceService } from '../Services/status-service.service';
import { LeaveTypeService } from '../Services/leave-type.service';
import { LeaveType } from '../models/leave-type.model';
import { UserStatusService } from '../Services/user-status.service';
import { UserStatus } from '../models/user-status.model';
import { LoginService } from '../Services/login.service';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  loginObj:Login=new Login();
  leave:UserStatus[];
  userId:number;

  constructor( private userStatusService:UserStatusService,
    private loginService:LoginService) { }

  ngOnInit() {
    // this.getRemainingD0ays();
    this.getUserId();
  }
  getUserId(){
    this.loginService.loginCredential$.subscribe(data=>{
      this.userId=data.userId;
      console.log(this.userId);
    });
    this.userStatusService.getStatusRemainDays(this.userId).subscribe(us=>{
      this.leave=us;
      console.log(us);
    })
    
  }


  // getRemainingDays(){
  //   this.userStatusService.getStatusRemainDays(this.userId).subscribe(rts=>{
  //     // console.log(rts);
  //     this.leave=rts;
  //   });
  // }

}
