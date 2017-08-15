import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';

import { FacebookModule } from 'ngx-facebook';

const routes: Routes = [
  path: 'new-route', component: EditReadingResourcesComponent
  {path: '', redirectTo: '/end-user/readings/today', pathMatch: 'full'},
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
];

@NgModule({
  declarations: [
    AppComponent
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
