import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  currentDate = new Date();

  temp = {
    date: this.currentDate,
    time: this.currentDate.getHours() + ':' + this.currentDate.getMinutes()
  }

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Delivery');
  }

  onSubmit(){
    const data = {
      date: (this.temp.date.getUTCMonth() + 1)
        + '/' + (this.temp.date.getUTCDate() + 1)
        + '/' + this.temp.date.getUTCFullYear(),
      time: this.temp.time
    }

    console.log(data);
  }

}
