import { Component } from '@angular/core';
import { LoginService } from './Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Leave Management System';
  constructor(
    private loginService:LoginService,
    private router:Router
  ){}
  userRole:string;
  isLoggedIn:boolean=false;
  userData:any;

  login(loginStatus:string){
   
    if(loginStatus=="admin"){
      this.isLoggedIn=true;
      this.userRole="admin";
    }else if(loginStatus=="emp"){
    
      this.isLoggedIn=true;
      this.userRole="emp";
    }else{
      this.isLoggedIn=false;
    }
      
    this.loginService.loginCredential$.subscribe(data => {
      if (data != null && data !== 'error') {
        this.isLoggedIn = true;
        this.userData = data;
        this.userRole=this.userData.userRole;
      }
  });


}
  

  ngOnInit() {
    this.loginService.loginCredential$.subscribe(data => {
      if (data != null && data !== 'error') {
        this.isLoggedIn = true;
        this.userData = data;
        // this.userRole=this.userData.userRole;
        // if(this.userRole=="Admin"){
        //   this.router.navigate(['/pendingLeave']);
        // }else if(this.userRole=="User"){
        //   this.router.navigate(['/leaveApply']);
        // }
      }
    });
  }
    
}
