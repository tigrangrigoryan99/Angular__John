import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemRoutingModule } from './system/system-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    BrowserModule, 
    AppRoutingModule,
    SystemRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
