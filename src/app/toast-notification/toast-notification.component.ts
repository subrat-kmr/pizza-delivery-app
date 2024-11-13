import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-notification.component.html',
  styleUrl: './toast-notification.component.css'
})
export class ToastNotificationComponent {
  message!: string;
  type: 'success' | 'error' | 'info' = 'success';
  duration: number = 3000;

  ngOnInit(): void {
  }

  show(message: string, type: 'success' | 'error' | 'info' = 'success', duration: number = 3000) {
    debugger
    this.message = message;
    this.type = type;
    this.duration = duration;
    setTimeout(() => {
      this.close();
    }, duration);
  }

  close() {
    this.message = '';
  }
}
