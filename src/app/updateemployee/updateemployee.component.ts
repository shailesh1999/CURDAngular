import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { HttpDemoService } from '../http-demo.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
    empid!:number;
    employee:Employee=new Employee();
    constructor(private hDemo:HttpDemoService,private route:Router,private r:ActivatedRoute){}
    ngOnInit(): void {
      this.empid=this.r.snapshot.params['empid'];
      this.hDemo.getEmployeeById(this.empid).subscribe(data=>{
        this.employee=data;
      },
      error=>console.log(error));
    }
    upEmployee(){
      this.hDemo.upEmp(this.empid,this.employee).subscribe(data=>{
        console.log(data);
        this.route.navigate(['/rest']);
      },
      error=>console.log(error));
    }
}