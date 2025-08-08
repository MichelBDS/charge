import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quick-access',
  standalone: true,
  imports: [],
  templateUrl: './quick-access.component.html',
  styleUrl: './quick-access.component.scss'
})
export class QuickAccessComponent {
  public arrayQuickAccess = signal([
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Mensalidades',
      href: '/mensalidades'
    }
  ]);

  public userName = signal('Michel Barros');
}
