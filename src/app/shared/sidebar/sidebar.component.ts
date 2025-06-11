import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { sheredModule } from '../shered.module';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [...sheredModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  menuOpen = false;
  constructor(private authService: AuthService, public router: Router) { }
  ngOnInit() { }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    if (width > 768 && this.menuOpen) {
      this.menuOpen = false;
    }
  }
}
