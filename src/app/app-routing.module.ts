import { NgModule } from '@angular/core';

import { RouterModule ,Routes,Router} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminViewUserComponent } from './admin-view-user/admin-view-user.component';
import { RoleComponent } from './role/role.component';
import { DepartmentComponent } from './department/department.component';

import { AdminLeaveComponent } from './admin-leave/admin-leave.component';
import { UserComponent } from './user/user.component';
import { AdminStatusComponent } from './admin-status/admin-status.component';
import { PrivilageComponent } from './privilage/privilage.component';
import { AdminPendingComponent } from './admin-pending/admin-pending.component';
import { LeaveManageComponent } from './leave-manage/leave-manage.component';
import { ViewLeaveTypeComponent } from './leaveType/view-leave-type/view-leave-type.component';
import { AddLeaveTypeComponent } from './leaveType/add-leave-type/add-leave-type.component';
import { LoginComponent } from './login/login.component';

const routs:Routes=[
  {path:'user',component:AdminViewUserComponent},
  {path:'role',component:RoleComponent},
  {path:'department',component:DepartmentComponent},
  {path:'leaveType',component:AdminLeaveComponent},
  

  {path:'status',component:AdminStatusComponent},
  {path:'privilage',component:PrivilageComponent},
  {path:'pending',component:LeaveManageComponent},
  {path:'pendingLeave',component:ViewLeaveTypeComponent},
  {path:'leaveApply',component:AddLeaveTypeComponent},
  {path:'login',component: LoginComponent },
 

  
  


]
@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routs)
  ],
  declarations: []
})
export class AppRoutingModule { }
