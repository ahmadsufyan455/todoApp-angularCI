import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// koneksi http
import { HttpClientModule } from '@angular/common/http';

// angular material design
import { MaterialDesign } from './material/material';

// component
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { TambahDataComponent } from './tambah-data/tambah-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
    TambahDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    TambahDataComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
