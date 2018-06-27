import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  pages = [
    {name: 'Home', page:'home'},
    {name: 'Book', page:'book'},
    {name: 'About', page:'about'},
    {name: 'Contact', page: 'contact'}
  ];

  ngOnInit() {
  }

}
