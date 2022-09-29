import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  @ViewChild('icon') burgericon: ElementRef | undefined;
  @ViewChild('body') burgerbody: ElementRef | undefined;

  constructor () {
    
  }

  addNewClass() {
    console.log(1);
    
    if(this.burgericon?.nativeElement?.classList.contains('_active')) {
      this.burgericon?.nativeElement?.classList.remove('_active');
    } else {
      this.burgericon?.nativeElement?.classList.add('_active');
    }

    if(this.burgerbody?.nativeElement?.classList.contains('_active')) {
      this.burgerbody?.nativeElement?.classList.remove('_active');
    } else {
      this.burgerbody?.nativeElement?.classList.add('_active');
    }
  }
}
