import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputFormComponent } from './to-do-list/input-form/input-form.component';
import { ListComponent } from './to-do-list/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ToDoListComponent,
    NavbarComponent,
    InputFormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
