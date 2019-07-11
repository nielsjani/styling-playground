import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { GridComponent } from './grid/grid.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularAnimationsComponent } from './angular-animations/angular-animations.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexBoxComponent,
    GridComponent,
    AngularAnimationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
