export interface Facility {
  id: number;
  name: string;
  status: 'active' | 'inactive';
  sector: string;
  nationalId: string;
  phoneNumber: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}