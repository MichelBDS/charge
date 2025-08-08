import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MonthlyPaymentComponent } from '../../components/monthly-payment/monthly-payment.component';
import { QuickAccessComponent } from '../../components/quick-access/quick-access.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, QuickAccessComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
