import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input() name;
  @Input() page;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigator(){
    if(this.name === 'Home'){
        this.router.navigate(['']);

      } if(this.name === 'Book'){
        this.router.navigate(['book']);

        } if(this.name === 'About'){
          this.router.navigate(['about']);

          } if(this.name === 'Contact'){
            this.router.navigate(['contact']);
          }


  }

}
