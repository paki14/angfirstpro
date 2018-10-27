import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { Login } from '../models/login.model';
import { LoginService } from '../Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
 // @Output() loginEvent=new EventEmitter();

  loginMsg:boolean=false;
  username:string;
  password:string;
  userRole:string;
   loginObj =new Login();

  login(){
    // if(this.username=="admin"&&this.password=="123"){
    //   this.userRole="admin";
    // this.loginEvent.emit(this.userRole);
    // }else if(this.username=="user"&&this.password=="123"){
    //   this.userRole="emp";
    //   this.loginEvent.emit(this.userRole);
    // }else{
    //   this.loginMsg =true;
    // }
    if(this.username!="" &&this.password!=""){
     
      
      this.loginObj.password=this.password;
      this.loginObj.userName=this.username;
    this.loginService.getLoginAuth(this.loginObj);
    }else{
        this.loginMsg =true;
      }
  }

}


