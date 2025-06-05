import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ApiDataComponent } from './api-data/api-data/api-data.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

export const routes_pages: Routes = [
    { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
    { path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard] },
    { path: 'api-data', component: ApiDataComponent, canActivate: [AuthGuard] },
]