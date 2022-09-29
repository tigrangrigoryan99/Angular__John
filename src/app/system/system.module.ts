import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlogPageComponent } from './blog-page/blog-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownDirective } from './shared/directives/dropdown.directives';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';

@NgModule({
  declarations: [
    // Components
    SystemComponent, 
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    BlogPageComponent,

    // Directives
    DropdownDirective
  ],
  imports: [ 
    CommonModule, 
    SystemRoutingModule
  ],
  exports: [],
})

export class StyleModule {}
