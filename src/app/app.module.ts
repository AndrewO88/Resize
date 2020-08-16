import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ResizableModule} from 'angular-resizable-element';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {RefDirective} from './ref.directive';
import {PortalModule} from '@angular/cdk/portal';


@NgModule({
  declarations: [
    AppComponent,
    RectangleComponent,
    RefDirective,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    ResizableModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
