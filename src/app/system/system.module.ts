import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './shared/components/header/header.component';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';

@NgModule({
  declarations: [
    SystemComponent, 
    HeaderComponent
  ],
  imports: [ 
    CommonModule, 
    SystemRoutingModule
  ],
  exports: [],
})

export class StyleModule {}
