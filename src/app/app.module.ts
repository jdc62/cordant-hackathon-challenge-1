import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetContainerComponent } from './widget-container/widget-container.component';
import { HttpClientModule } from '@angular/common/http';
import { WidgetComponent } from './widget-container/widget/widget.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {WidgetService} from './services/widget.service';


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
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
