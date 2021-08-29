import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReportCardComponent } from './report-card/report-card.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigatorComponent,
    NotFoundComponent,
    WelcomeComponent,
    ReportCardComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'navigator:tab', component: NavigatorComponent},
      {path: 'navigator', component: NavigatorComponent},
      {path: '**', component: NotFoundComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
