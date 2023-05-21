import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../students';
import { Location } from '@angular/common';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
   ) {}
  
   ngOnInit() {
    this.getStudent();
    }

  student?: Student;

  goBack(): void {
    this.location.back();
   }

   save(): void {
    this.studentService.updateStudent(this.student!)
    .subscribe(() => this.goBack());
   }
   
  getStudent(): void {
    const pathId = this.route.snapshot.paramMap.get('id');
    if (pathId) {
    this.studentService.getStudent(+pathId)
    .subscribe(student => this.student = student);
    }
    }
}
