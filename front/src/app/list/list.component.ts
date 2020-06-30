import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  datalist : string[];
  category : string;
  sort : string;
  init_sort : string = "recommand";

  constructor(
    private route:ActivatedRoute,
    private data:DataService
  ) { }

  ngOnInit() {
    this.getData(this.init_sort)
  }

  getData(sort){
    this.category = this.route.snapshot.paramMap.get('category')
    if(sort == this.sort){
      this.sort = "-" + this.sort;
    }
    else{
      this.sort = sort;
    }

    this.data.getlist(this.category, this.sort).subscribe(
      response=> this.datalist = response
    )
  }

}
