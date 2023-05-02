import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { model_Student } from '../services/model_student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: model_Student[] = [];
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudentsData();
  }

  getStudentsData(): void {
    this.studentService
      .getStudentsList()
      .subscribe((data) => (this.students = data));
  }
}
