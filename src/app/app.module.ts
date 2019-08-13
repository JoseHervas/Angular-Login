import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';

import {HttpClientModule} from '@angular/common/http'; 

import { FormsModule }   from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

let AppRoutes: Routes = [
  {"path": "", "component": HomeComponent, "canActivate": [AuthGuard]},
  {"path": "login", "component": LoginComponent},
] 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
