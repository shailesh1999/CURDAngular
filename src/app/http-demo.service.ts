import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class HttpDemoService { 
  private baseURL="http://localhost:8080/employee";
  constructor(private http: HttpClient) { }
  readAllusers(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
  deleteEmp(empid: number): Observable<any> {  
    return this.http.delete(`http://localhost:8080/employee/${empid}`); 
  } 
  addEmployee(employee:Employee):Observable<object>{
    return this.http.post("http://localhost:8080/employee",employee);
  }
  getEmployeeById(empid:number):Observable<any>{
    return this.http.get(`${this.baseURL}/${empid}`);
  }

  upEmp(empid:number,employee:Employee):Observable<object>{
    return this.http.put(`${this.baseURL}/${empid}`,employee);
  }
}
