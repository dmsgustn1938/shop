import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

//for router
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private router:Router,
    private data:DataService
  ) { }

  ngOnInit() {

  }

  start() {
    this.router.navigate(["category"])
  }

}
