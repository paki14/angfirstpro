import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../models/admin-user.model';
import { AdminUserService } from '../Services/admin-user.service';
import { ThrowStmt } from '@angular/compiler';
import { DepartmentService } from '../Services/department.service';
import { InteractionService } from '../Interaction/interaction.service';
import { RoleServiceService } from '../Services/role-service.service';
import { User } from '../models/user.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-view-user',
  templateUrl: './admin-view-user.component.html',
  styleUrls: ['./admin-view-user.component.css']
})
export class AdminViewUserComponent implements OnInit {
  userObj = new User();
  //userObj:AdminUser=new AdminUser;
  users=[];
  departments = [];
  roles = [];
  constructor(private userService: AdminUserService,
    private depService: DepartmentService,
    private roleservice: RoleServiceService,
    // private intService:InteractionService
  ) { }

  ngOnInit() {
    // this.getUser();
    this.viewLDepartment();
    this.ViewRole();
    this.getAdminUser();
  }
  // getUser(){
  //   this.userService.getAllUser().subscribe(ad=>{
  //     this.users=ad;
  //   });
  //   }
  //   addUser(){
  //     return this.userService.createUser(this.userObj).subscribe(ds=>{
  //       alert("user Added");
  //       this.getUser();
  //     })
  //   }
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
  addUserForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    roleId: new FormControl(''),
    departmentId: new FormControl(''),
    joinDate: new FormControl('')
  });

  onSubmit() {

    const joinDate = new Date(this.addUserForm.value.joinDate);
    const currentDate = new Date();


    const leaveDays = (currentDate.getDate() - joinDate.getDate()) + 1;
    // var days = leaveDays / (1000 * 60 * 60 * 24) + 1;

    console.log(leaveDays);
    this.userObj.servicePeriod = leaveDays;

    this.userObj.userName = this.addUserForm.value.userName;
    this.userObj.email = this.addUserForm.value.email;
    this.userObj.password = this.addUserForm.value.password;
    this.userObj.firstName = this.addUserForm.value.firstName;
    this.userObj.lastName = this.addUserForm.value.lastName;
    this.userObj.roleId = this.addUserForm.value.roleId;
    this.userObj.departmentId = this.addUserForm.value.departmentId;
    this.userObj.joinDate = new Date(this.addUserForm.value.joinDate);

    console.log(this.userObj);

    this.userService.createUser(this.userObj).subscribe(data => {
      console.log('new user create successfully');
      this.clearFields();
    });

  }
  clearFields(){
    this.addUserForm.patchValue({userName: ""});
    this.addUserForm.patchValue({email: ""});
    this.addUserForm.patchValue({password: ""});
    this.addUserForm.patchValue({firstName: ""});
    this.addUserForm.patchValue({lastName: ""});
    this.addUserForm.patchValue({roleId: "Select Role"});
    this.addUserForm.patchValue({departmentId: "Select Department"});
    this.addUserForm.patchValue({joinDate: ""});
  }
  getAdminUser(){
    return this.userService.getAllUser().subscribe(user=>{
      this.users=user;
    })
  }
}
