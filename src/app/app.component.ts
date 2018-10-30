import { Component } from '@angular/core';
import { LoginService } from './Services/login.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> b5a4986d776a144936f7064bc89854ac27a601f4

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'leave';
  constructor(
<<<<<<< HEAD
    private loginService:LoginService,
    private router:Router
=======
    private loginService:LoginService
>>>>>>> b5a4986d776a144936f7064bc89854ac27a601f4
  ){}
  userRole:string;
  isLoggedIn:boolean=false;
  userData:any;

  login(loginStatus:string){
   
    if(loginStatus=="true"){
      this.isLoggedIn=true;
      
<<<<<<< HEAD
      
  }else{
    
    this.router.navigate(['/login']);
  }


=======
      this.loginService.loginCredential$.subscribe(data => {
        if (data != null && data !== 'error') {
          this.isLoggedIn = true;
          this.userData = data;
          this.userRole=this.userData.userRole;
        }
    });
  }
>>>>>>> b5a4986d776a144936f7064bc89854ac27a601f4
}
  

  ngOnInit() {
<<<<<<< HEAD
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
=======
>>>>>>> b5a4986d776a144936f7064bc89854ac27a601f4
  }
    
}
