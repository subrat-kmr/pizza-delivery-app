import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {
  orderHistory!:any
  constructor(private route:ActivatedRoute){}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      console.log('history', data.orders);
      this.orderHistory = data.orders || []
    });
  }
}
