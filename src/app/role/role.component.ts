import { Component, OnInit } from '@angular/core';
import { Role } from '../models/role';
import { RoleServiceService } from '../Services/role-service.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roleObj:Role =new Role();
  roles:Role[];

  constructor(private roleService:RoleServiceService) { }

  ngOnInit() {
    this.getRole();
  }
  
  getRole(){
    this.roleService.getAllRole().subscribe(rol=>{
      // console.log(rol);
      this.roles=rol;
    });
  }
  addRole(){
    return this.roleService.createRole(this.roleObj).subscribe(role=>{
      // alert("Role added");
      // console.log(role);
      this.getRole();
    });
  }

  deleteRole(){
    return this.roleService.deleteRole(this.roleObj).subscribe(role=>{
      // alert("Role Deleted");
      this.getRole();
    })
  }

  deleteId(roled){
    this.roleObj=Object.assign({},roled);
    // alert(this.roleObj.id);
  }
  editId(edt){
    this.roleObj=Object.assign({},edt);
  }
  editRole(){
    return this.roleService.editRole(this.roleObj).subscribe(rd=>{
      // alert("Role edited");
      this.getRole();
    })
  }

}
