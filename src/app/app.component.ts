import { Component } from '@angular/core';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'leave';
  constructor(
    private loginService:LoginService
  ){}
  userRole:string;
  isLoggedIn:boolean=false;
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
  }

  ngOnInit() {
    this.loginService.loginCredential$.subscribe(data => {
      if(data != null){
        this.isLoggedIn=true;
      this.userRole=data.userRole;
      }
    });
  }
}
