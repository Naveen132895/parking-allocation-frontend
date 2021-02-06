import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Parking-Allotment';

  constructor(public router: Router){}

  ngOnInit() {
    if(!(localStorage.getItem("token"))){
      this.router.navigate(['login']);
    }
  }
}
