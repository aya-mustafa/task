import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  constructor(private _EmployeeService : EmployeeServicesService) { }




  addEmployeeForm:FormGroup = new FormGroup(
    {
      empName: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      empEmail: new FormControl('',[Validators.required,Validators.email]),
      empAddress: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      empPhone: new FormControl('',[Validators.required,Validators.pattern(/^(011|012|010)\d{8}$/)]),
    }
  )

  addEmpolyee()
  {
    let exampleModal:any = document.getElementById("exampleModal")
    this._EmployeeService.addNewEpmployee(this.addEmployeeForm.value).subscribe(
      {
        
        next: res => {
          alert("Added Successfully");
          location.replace("/");
         // exampleModal.style.display="none"
        },
          error: err => alert(err.error.message),
          complete: () => {
        }
      })
    // console.log(this.addEmployeeForm.value);
    this.addEmployeeForm.reset();
  }
}
