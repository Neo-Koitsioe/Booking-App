import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  fname: string;
  lname: string;
  age: number;
  email: string;
  city: string;
  datein: string;
  dateout: string;
  
  pages = [
    {name: 'Home', page:'home'},
    {name: 'Book', page:'book'},
    {name: 'About', page:'about'},
    {name: 'Contact', page: 'contact'}
  ];

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.fname = params['fname'];
        this.lname = params['lname'];
        this.age = params['age'];
        this.email = params['email'];
        this.city = params['city'];
        this.datein = params['datein'];
        this.dateout = params['dateout']

    });
  }

}
