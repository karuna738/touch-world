import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sheredModule } from '../../../shared/shered.module';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private service: EmployeeService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required,  Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.employeeForm.valid) {
      const newId = this.service.employeeData.length ? Math.max(...this.service.employeeData.map((e: any) => e.id ?? 0)) + 1 : 1;
      const employee = { id: newId, ...this.employeeForm.value };
      this.service.addEmp(employee);
      this.toastr.success('Successfully!', 'Added');
      this.router.navigate(['/employees']);
    }
  }

  onCancel() {
    this.employeeForm.reset();
    this.submitted = false;
    this.router.navigate(['/employees']);
  }
}
