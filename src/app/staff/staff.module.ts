import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LabsComponent } from './labs/labs.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentsComponent } from './students/students.component';
import { DocumentsComponent } from './documents/documents.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    StaffRoutingModule
  ],
  declarations: [HomeComponent, AboutComponent, LabsComponent, AttendanceComponent, StudentsComponent, DocumentsComponent, ComplaintsComponent, AlertsComponent, ProfileComponent]
})
export class StaffModule { }
