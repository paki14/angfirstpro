import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() isLoggedIn:boolean=false;
  username:string;
  password:string;
  userRole:string;

  login(){
    if(this.username=="admin"&&this.password=="123"){
      this.userRole="admin";
      this.isLoggedIn=true;
    }else if(this.username=="user"&&this.password=="123"){
      this.userRole="emp";
      this.isLoggedIn=true;
    }
  }

}
