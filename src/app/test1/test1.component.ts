import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  public sestevanec1: Number = 0;
  public sestevanec2: Number = 0;
  public vsota: Number = 0;

  constructor() { }

  ngOnInit() {
  }

  Sestej(){
    this.vsota = +this.sestevanec1 + +this.sestevanec2;
    console.log(this.vsota);
  }
}

