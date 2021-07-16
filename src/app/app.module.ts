import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DrawerContainerComponent } from './drawer-container/drawer-container.component';
import { DrawerContentComponent } from './drawer-container/drawer-content.component';
import { DrawerComponent } from './drawer-container/drawer.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    DrawerContainerComponent,
    DrawerContentComponent,
    DrawerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
