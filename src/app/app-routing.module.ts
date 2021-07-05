import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpDemoService } from './http-demo.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestClientComponent } from './rest-client/rest-client.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'service',component:PageNotFoundComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'update/:empid',component:UpdateemployeeComponent},
  {path:'rest',component:RestClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
