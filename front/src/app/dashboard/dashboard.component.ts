import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MENU } from '../app.module'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  selectedMenu:MENU;
  menustat: string="none";

  menu:MENU[] = [
    {name : "logout" , icon : "fas fa-sign-out-alt"},
    {name : "like" , icon : "fas fa-heart"},
    {name : "userinfo", icon : "fas fa-user"},
    {name : "message", icon : "fas fa-comments"}
  ]

  constructor(
    private router:Router,
    private route:ActivatedRoute,

  ) { }

  ngOnInit() {
    console.log(this.selectedMenu)
  }

  menuclick(){
    if(this.menustat=="none"){
      this.menustat = "block"
    }
    else{
      this.menustat = "none"
    }
  }

  selectMenu(menu){
    this.selectedMenu = menu;
    console.log("selectedMenu:",this.selectedMenu)
    console.log("menu", this.menu)
  }
}
