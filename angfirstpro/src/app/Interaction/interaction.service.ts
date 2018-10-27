import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { Department } from 'drive/src/app/models/department.model';
// import { Role } from 'drive/src/app/models/role';
import { AdminUser } from '../models/admin-user.model';
import { ThrowStmt } from '@angular/compiler';
import { Department } from '../models/department.model';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }
  private dataSourceDep=new Subject<Department>();
  private msgDataSourceDep=new Subject<string>();

  private dataSourceRole= new Subject<Role>();

  private dataSourceAdminUser=new Subject<AdminUser>();

  dataSourceDeparment=this.dataSourceDep.asObservable();
  dataSourceR=this.dataSourceRole.asObservable();
  message=this.msgDataSourceDep.asObservable();
  adminUser=this.dataSourceAdminUser.asObservable();


  sendDepartment(department:Department){
    this.dataSourceDep.next(department);
  }
  sendRole(role:Role){
    this.dataSourceRole.next(role);
  }
}
