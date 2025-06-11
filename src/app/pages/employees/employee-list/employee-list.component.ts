import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sheredModule } from '../../../shared/shered.module';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';
interface Employee {
  name: string;
  contact: string;
  email: string;
  address: string;
}
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit{
  allEmployees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  paginatedEmployees: Employee[] = [];

  searchValues: any = { name: '', contact: '', email: '', address: '' };
  searchFields = [
    { key: 'name', label: 'Name' },
    { key: 'contact', label: 'Contact No' },
    { key: 'email', label: 'Email' },
    { key: 'address', label: 'Address' }
  ];

  pageSize = 10;
  currentPage = 1;

  constructor(private router: Router, private service: EmployeeService, private toastr: ToastrService) {
  }
  ngOnInit() {
    this.allEmployees = this.service.getEmployees();
    this.applyFilter();
  }

  applyFilter() {
    const hasAnyValue = Object.values(this.searchValues).some((value:any) => value.trim() !== "");
    if(hasAnyValue){
        this.pageSize = 10;
        this.currentPage = 1;
    }
    this.filteredEmployees = this.allEmployees.filter((emp:any) => {
      return Object.keys(this.searchValues).every(key => emp[key].toLowerCase().includes(this.searchValues[key].toLowerCase()));
    });
    this.updatePagination();
  }

  updatePagination() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedEmployees = this.filteredEmployees.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.filteredEmployees.length / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  deleteEmployee(emp: Employee) {
    this.allEmployees = this.allEmployees.filter(e => e !== emp);
    this.toastr.success('Successfully!', 'Deleted');
    this.applyFilter();
  }

  navigateToAdd() {
    this.router.navigate(['/add-employee']);
  }
}
