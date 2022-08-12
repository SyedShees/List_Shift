import { Component } from '@angular/core';
import { EmployeeService } from './emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List_Shift';
  employee;

  detail={id:null,name:"",department:""};

  details(data:any){
    this.detail=data;
    console.log(this.detail);
    
  }

  next(data:any){
    this.detail=data;
    console.log(this.detail);
    
  }
  previous(data:any){
    this.detail=data;
    console.log(this.detail);
    
  }
  constructor(service: EmployeeService) {
    this.employee = service.getEmployees();
   }
}
