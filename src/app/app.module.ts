import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { GridComponent } from './grid/grid.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularAnimationsComponent } from './angular-animations/angular-animations.component';
import {RouterModule, Routes} from '@angular/router';
import { RoutingAnimationsFromComponent } from './routing-animations/routing-animations-from/routing-animations-from.component';
import { RoutingAnimationsToComponent } from './routing-animations/routing-animations-to/routing-animations-to.component';
import { AnimateTooComponent } from './routing-animations/animate-too/animate-too.component';
import { CssAnimationsComponent } from './css-animations/css-animations.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { LodashComponent } from './lodash/lodash.component';

const routes: Routes = [
  {path: '', component: RoutingAnimationsFromComponent},
  {path: 'animate', component: RoutingAnimationsToComponent, data: {animation: 'AnimatePageAnimation'} },
  {path: 'animate-too', component: AnimateTooComponent, data: {animation: 'AnimateTooPageAnimation'} },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FlexBoxComponent,
    GridComponent,
    AngularAnimationsComponent,
    RoutingAnimationsFromComponent,
    RoutingAnimationsToComponent,
    AnimateTooComponent,
    CssAnimationsComponent,
    BootstrapComponent,
    LodashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
