import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms';
import { IndexComponent } from './components/index/index.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    IndexComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
