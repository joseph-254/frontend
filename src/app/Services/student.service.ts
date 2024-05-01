import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {}

  saveStudent(inputData: object){
    return this.httpClient.post('', inputData);
  }
}
