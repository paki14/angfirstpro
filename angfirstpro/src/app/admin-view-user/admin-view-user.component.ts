import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../models/admin-user.model';
import { AdminUserService } from '../Services/admin-user.service';
import { ThrowStmt } from '@angular/compiler';
import { DepartmentService } from '../Services/department.service';
import { InteractionService } from '../Interaction/interaction.service';
import { RoleServiceService } from '../Services/role-service.service';

@Component({
  selector: 'app-admin-view-user',
  templateUrl: './admin-view-user.component.html',
  styleUrls: ['./admin-view-user.component.css']
})
export class AdminViewUserComponent implements OnInit {
  userObj:AdminUser=new AdminUser;
  users:AdminUser[];
  departments=[];
  roles=[];
  constructor(private userService:AdminUserService,
     private depService:DepartmentService,
     private roleservice:RoleServiceService,
      private intService:InteractionService) { }

  ngOnInit() {
    this.getUser();
    this.viewLDepartment();
    this.ViewRole();
  }
  getUser(){
    this.userService.getAllUser().subscribe(ad=>{
      this.users=ad;
    });
  }
  addUser(){
    return this.userService.createUser(this.userObj).subscribe(ds=>{
      alert("user Added");
      this.getUser();
    })
  }
  viewLDepartment(){
    // this.viewLeaveService.getLeaveType().subscribe(ad=>{
    //   this.leaves=ad;
    // });

    this.depService.getAllDepartment().subscribe(ads=>{
      this.departments=ads;
    });
 }

  ViewRole(){
    this.roleservice.getAllRole().subscribe(rd=>{
      this.roles=rd;
    });
  }

}
