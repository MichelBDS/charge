import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed = false;
  activeDropdown: string | null = null;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleDropdown(menu: string){
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }
}
