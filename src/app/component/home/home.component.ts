import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pages = [
    {name: 'Home', page:'home'},
    {name: 'Book', page:'book'},
    {name: 'About', page:'about'},
    {name: 'Contact', page: 'contact'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  transport(){

    this.router.navigate(['book']);
}

}
