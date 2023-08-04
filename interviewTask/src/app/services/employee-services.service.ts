import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employee } from '../interfaces/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  constructor(private _http : HttpClient) { }

  addNewEpmployee(employeeData:Employee) : Observable<any>
  {
    return this._http.post('http://task.soft-zone.net/api/Employees/addEmployee',employeeData)
  }

  getAllEmployee() : Observable<any>
  {
    return this._http.get('http://task.soft-zone.net/api/Employees/getAllEmployees')

  }

  deleteEmployee(empId:any) : Observable<any>
  {
    return this._http.get(`http://task.soft-zone.net/api/Employees/deleteEmpByID/${empId}`)
  }

  updateEmplyee(newEmployeeData:Employee) : Observable<any>
  {
    return this._http.post('http://task.soft-zone.net/api/Employees/addEmployee',newEmployeeData)
  }
  
  getOneEmployee(id:number) : Observable<any>
  {
    return this._http.get(`http://task.soft-zone.net/api/Employees/getEmpByID/${id}`)
  }
}


