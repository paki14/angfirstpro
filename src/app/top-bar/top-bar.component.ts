import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Output() loginEvent=new EventEmitter();
  
  constructor(
    private router:Router,
    private loginService:LoginService
  ) { }
userName:string;
  ngOnInit() {
    this.getUserName();
  }

  logout(){
    this.loginEvent.emit("false");
   // this.router.navigate(['/login']);
  }
getUserName(){
  this.loginService.loginCredential$.subscribe(da=>{
this.userName=da.userName;
  })
}

}
