import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { sheredModule } from '../../../shared/shered.module';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.scss'
})
export class ApiDataComponent {
  originalData: any[] = [];
  filteredData: any[] = [];
  displayedData: any[] = [];

  searchQuery: string = '';
  sortKey: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  currentPage = 1;
  pageSize = 10;
  loading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loading = true;
    this.apiService.getProducts().subscribe({
      next: (res: any) => {
        this.originalData = res.data || [];
        this.filteredData = [...this.originalData];
        this.updatePagination();
      },
      error: (err) => {
        console.error('API error:', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  filterData() {
    this.filteredData = this.originalData.filter((item) => Object.values(item).some((val) => val?.toString().toLowerCase().includes(this.searchQuery.toLowerCase())));
    this.currentPage = 1;
    this.updatePagination();
  }

  sortData(key: string) {
    if (this.sortKey === key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'asc';
    }

    this.filteredData.sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (!isNaN(aVal) && !isNaN(bVal)) {
        return this.sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }

      const aStr = aVal?.toString().toLowerCase() || '';
      const bStr = bVal?.toString().toLowerCase() || '';

      return this.sortDirection === 'asc' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
    });

    this.currentPage = 1;
    this.updatePagination();
  }


  updatePagination() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedData = this.filteredData.slice(start, start + this.pageSize);
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

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }
}
