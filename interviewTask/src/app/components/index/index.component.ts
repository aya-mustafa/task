import { Component } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  AllEmployee:any;
  currentPage = 1; // start with the first page
  itemsPerPage = 10; // show 10 items per page

  constructor(private _EmployeeService : EmployeeServicesService) {
    this.getAllEmployees()
   }

  getAllEmployees()
  {
    this._EmployeeService.getAllEmployee().subscribe(
      {
        
        next: res => {
          this.AllEmployee = res;
          console.log(this.AllEmployee)
        },
          error: err => alert(err.error.message),
          complete: () => {
        }
      })
    }



    deleteOneEmployee(id:number)
    {
      this._EmployeeService.deleteEmployee(id).subscribe(
        {
          
          next: res => {
            console.log(res);
            alert("Deleted Successfully");
            location.replace("/");
          },
            error: err => alert(err.error.message),
            complete: () => {
          }
        })
    }
}
