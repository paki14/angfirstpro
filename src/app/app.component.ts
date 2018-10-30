import { Component } from '@angular/core';
import { LoginService } from './Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'leave';
  constructor(
    private loginService:LoginService,
    private router:Router
  ){}
  userRole:string;
  isLoggedIn:boolean=false;
  userData:any;

  login(loginStatus:string){
   
    if(loginStatus=="true"){
      this.isLoggedIn=true;
      
      
  }else{
    
    this.router.navigate(['/login']);
  }


}
  

  ngOnInit() {
    this.loginService.loginCredential$.subscribe(data => {
      if (data != null && data !== 'error') {
        this.isLoggedIn = true;
        this.userData = data;
        this.userRole=this.userData.userRole;
        if(this.userRole=="Admin"){
          this.router.navigate(['/pendingLeave']);
        }else if(this.userRole=="User"){
          this.router.navigate(['/leaveApply']);
        }
      }
    });
  }
    
}
