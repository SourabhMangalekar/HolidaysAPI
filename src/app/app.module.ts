import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiDataViewComponent } from './components/api-data-view/api-data-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule } from 'primeng/paginator';
import { CalendarModule } from 'primeng/calendar';

import { TopbarComponent } from './components/api-data-view/topbar/topbar.component';
import { SidebarComponent } from './components/api-data-view/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ApiDataViewComponent,
    TopbarComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    SidebarModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    MenuModule,
    PaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
