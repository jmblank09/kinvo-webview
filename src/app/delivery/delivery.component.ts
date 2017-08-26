import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  currentDate = new Date();

  temp = {
    date: this.currentDate,
    time: this.currentDate.getHours() + ':' + this.currentDate.getMinutes()
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
