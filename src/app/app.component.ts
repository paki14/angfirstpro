import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leave';

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
}
