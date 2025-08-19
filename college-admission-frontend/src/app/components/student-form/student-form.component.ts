import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.component.html'
})
export class StudentFormComponent {
  student = { name: '', email: '', course: '', phone: '' };

  // ← Add this method
  addStudent() {
    console.log('Student added:', this.student);
    // Optionally, send to backend via service
    alert(`Student ${this.student.name} added!`);
    this.student = { name: '', email: '', course: '', phone: '' }; // reset form
  }
}
