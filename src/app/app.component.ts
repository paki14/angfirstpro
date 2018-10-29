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
  userData:any;

  login(loginStatus:string){
   
    if(loginStatus=="true"){
      this.isLoggedIn=true;
      
      this.loginService.loginCredential$.subscribe(data => {
        if (data != null && data !== 'error') {
          this.isLoggedIn = true;
          this.userData = data;
          this.userRole=this.userData.userRole;
        }
    });
  }
}
  

  ngOnInit() {
  }
    
}
