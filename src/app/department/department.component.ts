import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { DepartmentService } from '../Services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departmentObj: Department=new Department();
  departments:Department[];

  constructor(private departmentService:DepartmentService) { }

  ngOnInit() {
    this.getDepartment();
  }
  

  getDepartment(){
    return this.departmentService.getAllDepartment().subscribe(
      dep=>{
        //console.log(dep);
        this.departments=dep;
      }

    );
  }
  addDepartment(){
    return this.departmentService.createDepartment(this.departmentObj).subscribe(lmn=>{
      // alert("Department added");
      //console.log(lmn);
       this.getDepartment();
    });
    
  }

  deleteDepartment(){
    return this.departmentService.deleteDepertment(this.departmentObj).subscribe(des=>{
      // alert("Department deleted");
      this.getDepartment();
    });
  }

  deleteId(deped){
    this.departmentObj=Object.assign({},deped);
  
  }
  editId(edit){
    this.departmentObj=Object.assign({},edit);
    // alert(this.departmentObj.id)

  }
  editDepartment(){
    return this.departmentService.editDepartment(this.departmentObj).subscribe(derp=>{
      //alert("Department edited");
      this.getDepartment();
      // this.editId(edit);
    });
  }
  clear(){
    this.departmentObj.id=null;
    this.departmentObj.departmentName=null;
    
    
  }
  
  // updateDepartment(){
  //   return this.departmentService.updateDepartment(this.departmentObj).subscribe(udp=>{
  //     alert("department Updated");
  //     this.getDepartment();
  //   });
  // }
}
