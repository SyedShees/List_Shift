import { NgIf } from '@angular/common';
import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { EmployeeService } from '../emp.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  
  @Input() employee:any;
  @Input() key:any;
  @Output() data= new EventEmitter<{id:number,name:string, department:string}>();
  @Output() dataa= new EventEmitter<{id:number,name:string, department:string}>();
  @Output() dataaa= new EventEmitter<{id:number,name:string, department:string}>();
  title="list of Employees"
  employees;

  Addtask(input:any){
    var Id=input.id;
    var Name=input.name;
    var Department=input.department;
    this.data.emit({id:Id,name:Name,department:Department});
    
    
  }
  next(input:any){
    if(input.id<this.employee.length){
      var Id=input.id+1;
    }
    else{
      Id=1;
    }
    for (let index = 0; index < this.employee.length; index++) {
      const element = this.employee[index];
      if(element.id==Id){
        var Name=element.name;
        var Department=element.department;
        break;
      }
      
    }
      
  
    
    this.data.emit({id:Id,name:Name,department:Department});
    
    
  }
  previous(input:any){
    if(input.id>1){
      var Id=input.id-1;
    }
    else{
      Id=this.employee.length;
    }

    for (let index = 0; index < this.employee.length; index++) {
      const element = this.employee[index];
      if(element.id==Id){
        var Name=element.name;
        var Department=element.department;
        break;
      }
      
    }
    this.data.emit({id:Id,name:Name,department:Department});
    
    
  }
  constructor(service: EmployeeService) {
    this.employees = service.getEmployees();
   }

  ngOnInit(): void {
  }

}
