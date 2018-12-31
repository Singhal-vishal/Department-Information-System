import { StaffModule } from './staff/staff.module';
import { StaffRoutingModule } from './staff/staff-routing.module';
import { StudentRoutingModule } from './student/student-routing.module';
import { StudentModule } from './student/student.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './User_Authentication/authentication/authentication.component';
import { LoginComponent } from './User_Authentication/login/login.component';
import { SignUpComponent } from './User_Authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './User_Authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './User_Authentication/reset-password/reset-password.component';
import { FacultyModule } from './faculty/faculty.module';
import { AboutModule} from './faculty/about/about.module'


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    FormsModule,
    HttpClientModule,
    StaffModule,
    FacultyModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
