import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HodComponent } from './hod/hod.component';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administration.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RequestsComponent } from './requests/requests.component';
import { TimetableComponent } from './timetable/timetable.component';
import { AlertsComponent } from './alerts/alerts.component';
import { StudentComponent } from './student/student.component';
import { DocumentsComponent } from './documents/documents.component';
const routes: Routes = [
  { path: 'hod',
    component: HodComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'student',
        component: StudentComponent
      },
      {
        path: 'documents',
        component: DocumentsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'hod_tasks',
        component: AdministrationComponent
      },
      {
        path: 'faculty',
        component: FacultyComponent
      },
      {
        path: 'requests',
        component: RequestsComponent
      },
      {
        path: 'timetable',
        component: TimetableComponent
      },
      {
        path: 'alerts',
        component: AlertsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HodRoutingModule { }
