import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Directives1Component } from './directives1/directives1.component';
import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ParentBComponent } from './parent-b/parent-b.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FormsModule } from '@angular/forms';
import { ParentCComponent } from './parent-c/parent-c.component';
import { ChildCComponent } from './child-c/child-c.component';

@NgModule({
  declarations: [
    AppComponent,
    Directives1Component,
    HighlightDirectiveDirective,
    Parent1Component,
    Child1Component,
    Child2Component,
    ParentBComponent,
    ChildBComponent,
    ParentCComponent,
    ChildCComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
