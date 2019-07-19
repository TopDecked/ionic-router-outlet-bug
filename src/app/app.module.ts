import { HttpClientModule } from '@angular/common/http';
/* Angular official modules */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
/* Ionic specific modules */
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

/* Environment setup */
import { environment } from '../environments/environment';
/* App component and pages */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './pages/home/home.module';

const PROD = environment.production;

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    /* App Modules */
    AppRoutingModule,
    HomePageModule,

    /* Angular Modules */
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: PROD }),

    /* Ionic Modules */
    IonicModule.forRoot({
      scrollAssist: false,
      swipeBackEnabled: true
    }),
    IonicStorageModule.forRoot(),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
