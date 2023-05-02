import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private url = 'assets/students.json';
  constructor(private httpClient: HttpClient) {}

  getStudentsList(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
