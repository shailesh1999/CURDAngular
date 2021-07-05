import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { HttpDemoService } from '../http-demo.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee:Employee=new Employee();
  constructor(private router:Router,private hDemo:HttpDemoService) { }
  ngOnInit(): void {
  }
  saveEmployee(){
    this.hDemo.addEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.getEmployeesList();
    },
    error=> console.log(error));
  }
  getEmployeesList(){
    this.router.navigate(['/rest'])
  }
  createEmployee(){
    console.log(this.employee);
    this.saveEmployee();
  }
}