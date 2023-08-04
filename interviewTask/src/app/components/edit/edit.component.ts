import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';

@Component({

  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {


  constructor(private _EmployeeService : EmployeeServicesService) {
   
   }

  @Input()currentId!: number;

  oneEmployee:any


  updateEmployeeForm:FormGroup = new FormGroup(
    {
      empName: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      empEmail: new FormControl('',[Validators.required,Validators.email]),
      empAddress: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      empPhone: new FormControl('',[Validators.required,Validators.pattern(/^(011|012|010)\d{8}$/)]),
    }
  )


  getOneEmployee()
  {
    this._EmployeeService.getOneEmployee(this.currentId).subscribe((data)=>
    {
      this.oneEmployee = data;
     
      
      this.updateEmployeeForm.setValue({
        empName :this.oneEmployee.empName
        // email: 'john.doe@example.com',
        // message: 'Hello, world!',
      });

    })

  }

  updateEmpolyee()
  {

    console.log(this.currentId);
    // let exampleModal:any = document.getElementById("exampleModal")
    // this._EmployeeService.updateEmplyee(this.updateEmployeeForm.value).subscribe(
    //   {
        
    //     next: res => {
    //       console.log(this.updateEmployeeForm)
    //       alert("Updated Successfully");
    //       location.replace("/");
    //      // exampleModal.style.display="none"
    //     },
    //       error: err => alert(err.error.message),
    //       complete: () => {
    //     }
    //   })
    // console.log(this.addEmployeeForm.value);
    this.updateEmployeeForm.reset();
  }
}
