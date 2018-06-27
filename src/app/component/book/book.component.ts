import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  fname: string;
  lname: string;
  age: number;
  phone: number;
  city: string;
  datein: string;
  dateout: string;


  pages = [
    {name: 'Home', page:'home'},
    {name: 'Book', page:'book'},
    {name: 'About', page:'about'},
    {name: 'Contact', page: 'contact'}
  ];


  constructor(private router: Router) { }

  ngOnInit() {
  }

  booking(){
    this.router.navigate(['view'], {queryParams: {fname: this.fname, lname: this.lname, age: this.age,phone: this.phone, city:this.city, datein: this.datein, dateout: this.dateout }})

  }

}
