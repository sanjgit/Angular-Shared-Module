import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
@Component({
  selector: 'toast-message',
  template: `
  <div id="toast" *ngIf="toast.visible | async">
  {{ toast.message | async }}<br>
  <a (click)="toast.hide()">Dismiss</a>
</div>
  `,
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor(public toast: ToastService) { }

  ngOnInit() {
  }

 
}
