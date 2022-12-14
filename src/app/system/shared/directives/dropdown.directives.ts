import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: "[myDropdown]",
})

export class DropdownDirective {
    @HostBinding('class._open') isOpen:boolean = false;

    @HostListener('click') onClick() {
        this.isOpen = !this.isOpen;
    }
}