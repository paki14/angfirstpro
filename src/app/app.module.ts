import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddLeaveTypeComponent } from './leaveType/add-leave-type/add-leave-type.component';
import { ViewLeaveTypeComponent } from './leaveType/view-leave-type/view-leave-type.component';
import { DashboardComponent } from './leaveType/dashboard/dashboard.component';
import { StatusComponent } from './status/status.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { LeaveManageComponent } from './leave-manage/leave-manage.component';
import {RouterModule} from '@angular/router';
import { AdminViewUserComponent } from './admin-view-user/admin-view-user.component';
import { AppRoutingModule } from './app-routing.module';
import { RoleComponent } from './role/role.component';
import { DepartmentComponent } from './department/department.component';
import { AdminLeaveComponent } from './admin-leave/admin-leave.component';
import { FooterComponent } from './footer/footer.component';
import { AdminStatusComponent } from './admin-status/admin-status.component';
import { PrivilageComponent } from './privilage/privilage.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminPendingComponent } from './admin-pending/admin-pending.component';

// Service
import {DepartmentService } from './Services/department.service';
import {RoleServiceService} from './Services/role-service.service';
import { StatusServiceService} from './Services/status-service.service';
import {LeaveTypeService} from './Services/leave-type.service';
import { AdminUserService } from './Services/admin-user.service';
import { ApplyLeaveService } from './Services/apply-leave.service';
import { InteractionService } from './Interaction/interaction.service';
import { UserStatusService } from './Services/user-status.service';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    AddLeaveTypeComponent,
    ViewLeaveTypeComponent,
    DashboardComponent,
    StatusComponent,
    UserComponent,
    AdminComponent,
    AdminSideBarComponent,
    LeaveManageComponent,
    AdminViewUserComponent,
    RoleComponent,
    DepartmentComponent,
    AdminLeaveComponent,
    FooterComponent,
    AdminStatusComponent,
    PrivilageComponent,
    LoginComponent,
    AdminPendingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DepartmentService ,
    RoleServiceService, 
    StatusServiceService,
    LeaveTypeService,
    AdminUserService,
    ApplyLeaveService,
    InteractionService,
    UserStatusService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
