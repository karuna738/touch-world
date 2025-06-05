// src/app/employees/employee.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  public employeeData: any = [
    { id: 1, name: 'John Doe', contact: '9876543210', email: 'john.doe@gmail.com', address: '123 Main Street, Chennai' },
    { id: 2, name: 'Jane Smith', contact: '9123456780', email: 'jane.smith@gmail.com', address: '456 Park Avenue, Bangalore' },
    { id: 3, name: 'Arun Kumar', contact: '9988776655', email: 'arun.kumar@gmail.com', address: '78 Gandhi Road, Madurai' },
    { id: 4, name: 'Priya Ramesh', contact: '9090909090', email: 'priya.ramesh@gmail.com', address: '12 Lake View, Hyderabad' },
    { id: 5, name: 'Rahul Sharma', contact: '8888888888', email: 'rahul.sharma@gmail.com', address: '90 Sector 15, Delhi' },
    { id: 6, name: 'Divya Patel', contact: '7777777777', email: 'divya.patel@gmail.com', address: 'Block A, Ahmedabad' },
    { id: 7, name: 'Vikram Singh', contact: '9666666666', email: 'vikram.singh@gmail.com', address: '54 Railway Colony, Jaipur' },
    { id: 8, name: 'Anjali Nair', contact: '9555555555', email: 'anjali.nair@gmail.com', address: 'Kochi Heights, Kerala' },
    { id: 9, name: 'Suresh Iyer', contact: '9444444444', email: 'suresh.iyer@gmail.com', address: 'Plot 34, Mumbai' },
    { id: 10, name: 'Meena George', contact: '9333333333', email: 'meena.george@gmail.com', address: '9 Church Street, Trivandrum' },
    { id: 11, name: 'Deepak Verma', contact: '9222222222', email: 'deepak.verma@gmail.com', address: '50 Green Lane, Bhopal' },
    { id: 12, name: 'Sneha Joshi', contact: '9111111111', email: 'sneha.joshi@gmail.com', address: '88 MG Road, Pune' },
    { id: 13, name: 'Abhinav Rao', contact: '9000000000', email: 'abhinav.rao@gmail.com', address: '45 High Tech City, Hyderabad' },
    { id: 14, name: 'Lakshmi Menon', contact: '9898989898', email: 'lakshmi.menon@gmail.com', address: '33 South Street, Coimbatore' },
    { id: 15, name: 'Rajeev Pandey', contact: '9777777777', email: 'rajeev.pandey@gmail.com', address: '12 Lotus Lane, Lucknow' }
  ];

  constructor() { }

  addEmp(emp:any){
    this.employeeData.push(emp);
  }

  getEmployees():any {
    return this.employeeData;
  }
}
