import { Component, OnInit } from '@angular/core';
import { Status } from '../models/status.model';
import { StatusServiceService } from '../Services/status-service.service';
import { LeaveTypeService } from '../Services/leave-type.service';
import { LeaveType } from '../models/leave-type.model';
import { UserStatusService } from '../Services/user-status.service';
import { UserStatus } from '../models/user-status.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  leave:UserStatus[];

  constructor( private userStatusService:UserStatusService) { }

  ngOnInit() {
    this.getRemainingDays()
  }


  getRemainingDays(){
    this.userStatusService.getStatusRemainDays().subscribe(rts=>{
      // console.log(rts);
      this.leave=rts;
    });
  }

}
