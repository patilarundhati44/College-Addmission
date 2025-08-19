import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
  phone: string;
}

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, name: 'Arundati', email: 'arundati@example.com', course: 'IT', phone: '1234567890' }
    // Add more students or fetch from backend
  ];

  deleteStudent(id: number) {
    this.students = this.students.filter(s => s.id !== id);
  }
}
