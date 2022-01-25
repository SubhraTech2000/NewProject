import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nameSerach:string="";
  productArr=[
    {
      sno:1,
      name:'Mobile',
      price:'7000',
      rating:4
    },
    {
      sno:2,
      name:'Television',
      price:'7000',
      rating:5
    },
    {
      sno:3,
      name:'Laptop',
      price:'70000',
      rating:4
    },
    {
      sno:4,
      name:'Computer',
      price:'10000',
      rating:4
    },
    {
      sno:5,
      name:'Watch',
      price:'7000',
      rating:4
    }
  ]

}
