import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { NumberOnlyDirective } from "./directive/number-only.directive";
import { TruncatePipe } from "./pipe/truncate.pipe";

export const sheredModule:any = [
    CommonModule,
    RouterLink, 
    FormsModule, 
    RouterOutlet,
    ReactiveFormsModule, 
    RouterModule,
    NumberOnlyDirective,
    TruncatePipe
]
