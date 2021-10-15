import { Component, OnInit } from '@angular/core';
import { BooleanLiteral } from 'typescript';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  constructor() {
    this.time = this.getCurrentDateString();
  }

  time: string; 

  private initTimer(): void {

    const TIME_UPDATE_INTERVAL = 60000;

    setInterval(()=>{
      this.time = this.getCurrentDateString()
    }, TIME_UPDATE_INTERVAL);
  }

  ngOnInit(): void {
    this.initTimer();
  }

  getCurrentDateString(): string {
    let date = new Date();
    return date.getDate()
      + '.'
      + (date.getMonth()+1)
      + '.'
      + date.getFullYear()
      + ' '
      + date.getHours()
      + ':'
      + date.getMinutes()
  }
}
