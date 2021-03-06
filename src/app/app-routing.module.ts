import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentRoutingModule } from './student/student-routing.module';
import { StaffRoutingModule } from './staff/staff-routing.module';
import { FacultyRoutingModule } from './faculty/faculty-routing.module';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { HodRoutingModule } from './hod/hod-routing.module';


const routes: Routes = [
  { path: 'forgot-password',
     component: ForgotPasswordComponent
  },
  { path: 'reset-password',
     component: ResetPasswordComponent
  },
  { path: 'signup',
    component: SignUpComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), StudentRoutingModule, StaffRoutingModule, FacultyRoutingModule, HodRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
