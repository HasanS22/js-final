import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model'; // Assuming you have a Student model

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'YOUR_BACKEND_API_URL'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  // Get all students
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/students`);
  }

  // Get student by ID
  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/students/${id}`);
  }

  // Create a new student
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}/students`, student);
  }

  // Update a student
  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/students/${student.id}`, student);
  }

  // Delete a student by ID
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/students/${id}`);
  }
}
