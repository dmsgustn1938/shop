import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  id:string;
  messages:string[];
  receiver:string[];

  constructor(
    private data:DataService,
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit() {
    this.getMessage()
  }

  getMessage(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.data.getDetailMessage(this.id).subscribe(
      response=> this.messages=response
    )
    this.data.getReceiverUser(this.id).subscribe(
      response=> {
        this.receiver=response
        console.log(response)
      }
    )
  }

  sendMessage(messagecontent, receiver, id){
    this.id = this.route.snapshot.paramMap.get('id')
    this.data.sendMessage(messagecontent.value, receiver, this.id).subscribe(
      response => this.getMessage(),
      response => alert("다시 시도해주세요")
    )
  }


}
