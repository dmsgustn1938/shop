import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  goUniform(){
    this.router.navigate(['../list/Uniform'])
  }
  goAccessory(){
    this.router.navigate(['../list/Accessory'])
  }
  goWear(){
    this.router.navigate(['../list/Wear'])
  }
  gologin(){
    this.router.navigate(["login"])
  }

}


