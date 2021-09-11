import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TableBasicComponent} from './table-basic/table-basic.component';

import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { MatTableModule } from '@angular/material/table';
import { TableHttpComponent } from './table-http/table-http.component';
import {DataService} from './table-http/data.service';
import {UserService} from './usertable/user.service';
import { UsertableComponent } from './usertable/usertable.component';

@NgModule({
  declarations: [
    AppComponent,
    TableBasicComponent,
    TableHttpComponent,
    UsertableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
  ],
  providers: [
    UserService
    // DataService
    // { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
