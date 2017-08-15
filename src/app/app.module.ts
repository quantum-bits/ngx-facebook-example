import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';

import { FacebookModule } from 'ngx-facebook';
import { NewRouteComponent } from './new-route/new-route.component';


// WORKING HERE: add a new route....





@NgModule({
  declarations: [
    AppComponent,
    NewRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FacebookModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
