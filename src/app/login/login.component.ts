import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() loginEvent=new EventEmitter();

  loginMsg:boolean=false;
  username:string;
  password:string;
  userRole:string;

  login(){
    if(this.username=="admin"&&this.password=="123"){
      this.userRole="admin";
    this.loginEvent.emit(this.userRole);
    }else if(this.username=="user"&&this.password=="123"){
      this.userRole="emp";
      this.loginEvent.emit(this.userRole);
    }else{
      this.loginMsg =true;
    }
  }

}
