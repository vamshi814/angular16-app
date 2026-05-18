import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Directives1Component } from './directives1/directives1.component';
import { HighlightDirectiveDirective } from './highlight-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    Directives1Component,
    HighlightDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
