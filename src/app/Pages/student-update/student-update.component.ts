import { Component } from '@angular/core';
import { ActivatedRoute }from '@angular/router'

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent {

  studentId!: any;
  student!: any;
  errors: any = [];

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.studentId = this.route.snapshot.paramMap.get('id');
    alert(this.studentId);
  }

  updateStudent(){
    
  }

}
