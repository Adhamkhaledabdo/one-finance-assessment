import { Routes } from '@angular/router';
import { FacilitiesComponent } from './pages/facilities.component';

export const routes: Routes = [
  { path: '', component: FacilitiesComponent },
  { path: '**', redirectTo: '' }
];
