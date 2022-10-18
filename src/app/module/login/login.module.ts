import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';



@NgModule({
  declarations: [
    LoginComponent,
    ChangepasswordComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
