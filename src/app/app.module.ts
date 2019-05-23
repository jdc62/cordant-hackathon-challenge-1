import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetContainerComponent } from './widget-container/widget-container.component';
import {HttpClientModule} from '@angular/common/http';
import {WidgetComponent} from './widget-container/widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WidgetContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
