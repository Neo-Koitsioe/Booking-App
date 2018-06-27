import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pages = [
    {name: 'Home', page:'home'},
    {name: 'Book', page:'book'},
    {name: 'About', page:'about'},
    {name: 'Contact', page: 'contact'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
