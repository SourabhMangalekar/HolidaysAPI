import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

interface holidaysData {
  title: any,
  date: any,
  notes: any,
  bunting: boolean;
}

@Component({
  selector: 'app-api-data-view',
  templateUrl: './api-data-view.component.html',
  styleUrls: ['./api-data-view.component.css']
})

export class ApiDataViewComponent implements OnInit {

  pipe = new DatePipe('en-US');
  from!: Date;
  to!: Date;
  holidays: any[] = [];
  filteredHolidays: any[] = [];
  holidaysData: any[] = [];
  myJsonString: any;
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getHolidaysData().subscribe((result: any) => {

      this.holidaysData = result['scotland'].events;
      this.filteredHolidays = this.holidaysData;
      console.log(this.filteredHolidays);
    })
  }

  //**  This filter method will be called from UI's filter button.
  // Initially this method will format the date input to match the date from the API. so that comparing them and applying conditions on it will be easy.
  // Then in the for loop filteration takes place and filteredHolidaysData will be populated giving the filtered results.
  filter() {
    if (this.from == undefined || this.to == undefined) {
      alert('Please select dates.')
    } else {
      const format = 'yyyy-MM-dd';
      const fromDate = this.from;
      const toDate = this.to;
      const locale = 'en-US';
      const formattedDatefrom = formatDate(fromDate, format, locale);
      const formattedDateto = formatDate(toDate, format, locale);
      this.filteredHolidays = [];

      console.log(formattedDatefrom);
      console.log(this.holidaysData);

      for (let index = 0; index < this.holidaysData.length; index++) {
        if (this.holidaysData[index].date >= formattedDatefrom && this.holidaysData[index].date <= formattedDateto) {
          this.filteredHolidays.push(this.holidaysData[index])
        }
      }
    }
  }
}

