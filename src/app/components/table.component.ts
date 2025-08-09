import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Facility, PaginationInfo } from '../models/facility.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="table-container bg-white rounded-md shadow-sm overflow-hidden mb-2">
      <table class="data-table w-full border-collapse">
        <thead>
          <tr>
            <th class="bg-gray-50 p-1.5 text-right font-bold text-gray-800 border-b border-gray-200 text-xs w-10">#</th>
            <th class="bg-gray-50 p-1.5 text-right font-bold text-gray-800 border-b border-gray-200 text-xs w-auto">الاسم</th>
            <th class="bg-gray-50 p-1.5 text-right font-bold text-gray-800 border-b border-gray-200 text-xs w-16">الحالة</th>
            <th class="bg-gray-50 p-1.5 text-center font-bold text-gray-800 border-b border-gray-200 text-xs w-24">قطاع العمل</th>
            <th class="bg-gray-50 p-1.5 text-right font-bold text-gray-800 border-b border-gray-200 text-xs w-28">الرقم القومي</th>
            <th class="bg-gray-50 p-1.5 text-right font-bold text-gray-800 border-b border-gray-200 text-xs w-28">رقم الهاتف</th>
            <th class="bg-gray-50 p-1.5 text-right font-bold text-gray-800 border-b border-gray-200 text-xs w-24"></th>
          </tr>
        </thead>
        <tbody>
          <tr 
            *ngFor="let facility of facilities; trackBy: trackByFn" 
            class="hover:bg-gray-50 transition-colors"
          >
            <td class="p-2 align-middle text-table-text" style="font-size: 10px;">{{ facility.id }}</td>
            <td class="p-2 align-middle text-table-text" style="font-size: 10px;">{{ facility.name }}</td>
            <td class="p-2 align-middle">
              <span 
                class="status-badge py-0.5 px-1.5 rounded font-semibold inline-block w-12 text-center"
                style="font-size: 9px;"
                [class.status-active]="facility.status === 'active'"
                [class.status-inactive]="facility.status === 'inactive'"
              >
                {{ facility.status === 'active' ? 'مفعل' : 'موقوف' }}
              </span>
            </td>
            <td class="p-2 align-middle text-table-text text-center" style="font-size: 10px;">{{ facility.sector }}</td>
            <td class="p-2 align-middle text-table-text" style="font-size: 10px;">{{ facility.nationalId }}</td>
            <td class="p-2 align-middle text-table-text" style="font-size: 10px;">{{ facility.phoneNumber }}</td>
            <td class="p-2 align-middle">
              <button 
                class="action-btn bg-wan-dark text-white py-1.5 px-3 rounded-md flex items-center justify-between gap-4 transition-all hover:bg-gray-600 min-w-16"
                style="font-size: 9px;"
                (click)="onViewDetails(facility)"
              >
                <span>البيانات</span>
                <i class="fas fa-chevron-left" style="font-size: 8px;"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


    <div class="pagination flex flex-row-reverse justify-center items-center gap-1 mt-3" *ngIf="paginationInfo">
      <button 
        class="pagination-btn py-1.5 px-2 bg-transparent text-gray-400 rounded-md text-xs transition-all hover:text-gray-600"
        [disabled]="paginationInfo.currentPage === 1"
        [class.opacity-50]="paginationInfo.currentPage === 1"
        [class.cursor-not-allowed]="paginationInfo.currentPage === 1"
        (click)="onPageChange(paginationInfo.currentPage - 1)"
      >
        <i class="fas fa-chevron-left" style="font-size: 8px;"></i>
      </button>
      
      <button 
        *ngFor="let page of getPageNumbers()" 
        class="pagination-btn py-1.5 px-2 bg-transparent text-gray-500 rounded-md text-xs transition-all hover:bg-gray-100"
        [class.active]="page === paginationInfo.currentPage"
        (click)="onPageChange(page)"
      >
        {{ page }}
      </button>
      
      <button 
        class="pagination-btn py-1.5 px-2 bg-transparent text-gray-400 rounded-md text-xs transition-all hover:text-gray-600"
        [disabled]="paginationInfo.currentPage === paginationInfo.totalPages"
        [class.opacity-50]="paginationInfo.currentPage === paginationInfo.totalPages"
        [class.cursor-not-allowed]="paginationInfo.currentPage === paginationInfo.totalPages"
        (click)="onPageChange(paginationInfo.currentPage + 1)"
      >
        <i class="fas fa-chevron-right" style="font-size: 8px;"></i>
      </button>
    </div>
  `,
  styles: [`
    .status-active {
      @apply bg-green-200 text-green-400 border border-green-400;
    }
    
    .status-inactive {
      @apply bg-red-200 text-red-400 border border-red-400;
    }
    
    .pagination-btn.active {
      @apply bg-gray-600 text-white;
    }
  `]
})
export class TableComponent {
  @Input() facilities: Facility[] = [];
  @Input() paginationInfo: PaginationInfo | null = null;
  
  @Output() pageChanged = new EventEmitter<number>();
  @Output() viewDetails = new EventEmitter<Facility>();

  trackByFn(index: number, item: Facility): number {
    return item.id;
  }

  getPageNumbers(): number[] {
    if (!this.paginationInfo) return [];
    
    const pages = [];
    for (let i = 1; i <= this.paginationInfo.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  onPageChange(page: number): void {
    if (this.paginationInfo && page >= 1 && page <= this.paginationInfo.totalPages) {
      this.pageChanged.emit(page);
    }
  }

  onViewDetails(facility: Facility): void {
    this.viewDetails.emit(facility);
  }
}
