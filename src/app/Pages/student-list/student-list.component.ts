import { Component } from '@angular/core';
import { StudentResponse, StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  constructor(private studentService: StudentService){}
  students!: StudentResponse[];

  ngOnInit(){
    this.getStudentLists();
  }

  getStudentLists(){
    this.studentService.getStudents().subscribe((res:any)=>{
      console.log(res.student);
      this.students = res.student
    });
  }
  

}
