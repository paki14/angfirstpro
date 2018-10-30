import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { Login } from '../models/login.model';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  constructor(
    private loginService:LoginService,
    private router:Router) { }
=======
  constructor(private loginService:LoginService) { }
>>>>>>> b5a4986d776a144936f7064bc89854ac27a601f4
=======
  constructor(private loginService:LoginService) { }
>>>>>>> b5a4986d776a144936f7064bc89854ac27a601f4

  ngOnInit() {
  }
 @Output() loginEvent=new EventEmitter();

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
<<<<<<< HEAD
<<<<<<< HEAD
      
      this.loginObj.password=this.password;
      this.loginObj.userName=this.username;
      this.loginService.getLoginAuth(this.loginObj);
      this.loginService.loginCredential$.subscribe(
=======
=======
>>>>>>> b5a4986d776a144936f7064bc89854ac27a601f4
      this.loginObj.password=this.password;
      this.loginObj.userName=this.username;
    this.loginService.getLoginAuth(this.loginObj);
    this.loginService.loginCredential$.subscribe(
<<<<<<< HEAD
>>>>>>> b5a4986d776a144936f7064bc89854ac27a601f4
=======
>>>>>>> b5a4986d776a144936f7064bc89854ac27a601f4
      data=>{
     
          if(data!="error"){
            console.log(data);
            
            this.loginEvent.emit("true");
          }else{
            
            this.loginMsg =true;
          }
      },
      error=>{
        console.log(error);
      }
     
      )
    }
  }

}


