import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableComponent } from '../components/table.component';
import { FacilityService } from '../services/facility.service';
import { Facility, PaginationInfo } from '../models/facility.model';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, FormsModule, TableComponent],
  template: `
    <div class="main-content bg-custom-light-gray min-h-screen">
      <div class="header-section bg-white shadow-sm p-6 mb-10 mr-52">
        <h1 class="content-title text-lg font-bold text-gray-800">
          قائمة شركات البيع المعتمدة
        </h1>
      </div>

      <div class="table-section bg-white rounded-md shadow-sm p-3 mr-60 mx-8">
        <div class="toolbar flex items-center space-x-reverse space-x-4 mb-6">
        
        <div class="search-filter-container flex items-center space-x-reverse space-x-4 border border-gray-100 rounded-lg p-4 bg-white" style="height: 60px;">
          
          <div class="relative">
            <input 
              type="text" 
              class="bg-white border border-gray-300 rounded-lg px-4 py-3 text-right min-w-80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder= "رقم البطاقه/جواز السفر"
              [(ngModel)]="nationalId"
            >
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          <div class="bg-black text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-medium">
            0
          </div>

          <div class="relative">
            <select 
              class="bg-gray-100 text-black border border-gray-300 rounded-lg px-4 py-3 min-w-28 text-right text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 "
              [(ngModel)]="selectedStatus"
            >
              <option value="0">الحالة</option>
              <option value="1">مفعل</option>
              <option value="2">موقوف</option>
            </select>
            <svg class="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          
        </div>

        <button 
          class="bg-white text-gray-400 border border-gray-300 rounded-lg flex items-center justify-center gap-2 text-sm leading-none hover:bg-gray-100 transition-colors"
         style="height: 60px; width: 170px;"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
          مسح الكل
        </button>

        <button 
          class="bg-black text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors text-sm leading-none"
          style="height: 60px; width: 170px;"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
          </svg>
          بحث
        </button>

                  <button 
            class="bg-yellow-400 text-black rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-yellow-500 transition-colors text-sm leading-none"
            style="height: 60px; width: 170px;"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            أضف منشأة
          </button>   

        </div>

        <app-table 
          [facilities]="facilities"
          [paginationInfo]="paginationInfo"
        ></app-table>
      </div>
    </div>
  `,
  styles: [`
    .search-box::placeholder {
      color: #9CA3AF;
    }
  `]
})
export class FacilitiesComponent implements OnInit {
  facilities: Facility[] = [];
  paginationInfo: PaginationInfo | null = null;
  searchQuery: string = '';
  selectedStatus: string = '0';
  nationalId: string = ''

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.facilities = this.facilityService.getMockFacilities();
    this.paginationInfo = this.facilityService.getMockPagination();
  }

}
