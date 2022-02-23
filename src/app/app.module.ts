import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempraturePipe } from './temprature.pipe';
import { FormsModule } from '@angular/forms';
import { TempratureComponent } from './temprature/temprature.component';

@NgModule({
  declarations: [
    AppComponent,
    TempraturePipe,
    TempratureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
