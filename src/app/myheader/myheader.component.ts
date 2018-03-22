import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.css']
})
export class MyheaderComponent implements OnInit {

  title = "my Header section"
  constructor() { }

  ngOnInit() {
  }

}
