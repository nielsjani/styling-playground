import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexBoxComponent,
    GridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
