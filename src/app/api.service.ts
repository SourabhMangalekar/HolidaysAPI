import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://www.gov.uk/bank-holidays.json'


  constructor(private http: HttpClient) { }

  getHolidaysData() {
    return this.http.get(this.url)
  }

}
