
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface StudentResponse{
  id: number
  name: string
  email: string
  phone: string
  course: string
  created_at: string
  updated_at: string
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {}


  getStudents(){

    return this.httpClient.get('http://127.0.0.1:8000/api/student');
  }

  saveStudent(inputData: object){

    return this.httpClient.post('http://127.0.0.1:8000/api/student', inputData);
  }
}
