import { Component, OnInit} from '@angular/core';
import { ToastService, UserService } from 'sharedmodule';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService, public toast: ToastService
  ) {
    this.toast.update('Is this thing working?');
  }

  ngOnInit() {
    this.userService.populate();
    
  }
}