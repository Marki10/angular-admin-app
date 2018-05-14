import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ChartsModule } from 'ng2-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UsageComponent } from './usage/usage.component';

import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { OptionsComponent } from './options/options.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    WelcomeComponent,
    FeedbackComponent,
    UsageComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2FontawesomeModule,
    ChartsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
