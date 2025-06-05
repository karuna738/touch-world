import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { sheredModule } from './shared/shered.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, ...sheredModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'touchworld';
  constructor(public router: Router) { }

  get isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
