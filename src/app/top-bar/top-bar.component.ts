import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Output() loginEvent=new EventEmitter();
  
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.loginEvent.emit("false");
   // this.router.navigate(['/login']);
  }

}
