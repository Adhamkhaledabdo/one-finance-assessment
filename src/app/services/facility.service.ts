import { Injectable } from '@angular/core';
import { Facility, PaginationInfo } from '../models/facility.model';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  
  getMockFacilities(): Facility[] {
    return [
      { id: 1, name: 'أحمد إبراهيم', status: 'active', sector: 'تنظيفات منزل', nationalId: '01234567890', phoneNumber: '01234567890' },
      { id: 2, name: 'أحمد محمدي', status: 'active', sector: 'سيارات', nationalId: '01234567890', phoneNumber: '01234567890' },
      { id: 3, name: 'محمد علي', status: 'inactive', sector: 'التعليم', nationalId: '01234567890', phoneNumber: '01234567890' },
      { id: 4, name: 'أبو أحمد', status: 'active', sector: 'أجهزة', nationalId: '01234567890', phoneNumber: '01234567890' },
      { id: 5, name: 'كريم محمد', status: 'inactive', sector: 'كليلة', nationalId: '01234567890', phoneNumber: '01234567890' },
      { id: 6, name: 'محمد علي', status: 'active', sector: 'نفط وغاز', nationalId: '01234567890', phoneNumber: '01234567890' },
      { id: 7, name: 'عبد الله محمد', status: 'inactive', sector: 'التعليم', nationalId: '01234567890', phoneNumber: '01234567890' },
      { id: 8, name: 'عمر محمد', status: 'inactive', sector: 'زراعة', nationalId: '01234567890', phoneNumber: '01234567890' },
      { id: 9, name: 'نصرة رجب', status: 'active', sector: 'كليلة', nationalId: '01234567890', phoneNumber: '01234567890' }
    ];
  }

  getMockPagination(): PaginationInfo {
    return {
      currentPage: 3,
      totalPages: 6,
      totalItems: 54,
      itemsPerPage: 9
    };
  }
}