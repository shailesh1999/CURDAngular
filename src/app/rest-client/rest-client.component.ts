import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpDemoService } from '../http-demo.service';

@Component({
  selector: 'app-rest-client',
  templateUrl: './rest-client.component.html',
  styleUrls: ['./rest-client.component.css']
})
export class RestClientComponent implements OnInit {
  users?:any[];
  constructor(private hDemo:HttpDemoService,private router:Router) { }

  ngOnInit(): void {
    this.hDemo.readAllusers().subscribe((data)=>{
      this.users=data;
    });
  }
  deleteEmployee(empid:number){
    this.del(empid);
    }
  del(empid:number){
    this.hDemo.deleteEmp(empid).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/rest']);
    },
    error=>console.log(error));
  }
  updateEmployee(empid:number){
    this.router.navigate(['/update',empid]);
  }

  
}
