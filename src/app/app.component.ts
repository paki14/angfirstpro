import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leave';

  isLoggedIn:boolean=false;
  username:string;
  password:string;
  userRole:string;

  login(){
    if(this.username=="admin"&&this.password!=""){
      this.userRole="admin";
      this.isLoggedIn=true;
    }else if(this.username=="e"&&this.password!=""){
      this.userRole="emp";
      this.isLoggedIn=true;
    }
  }
}