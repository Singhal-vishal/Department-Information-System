import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  private baseUrl = 'http://localhost:8080/student';

  constructor(private http: HttpClient) { }

  getTimetable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/student_timetable`);
  }
}
