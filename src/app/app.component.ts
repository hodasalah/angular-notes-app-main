import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[]
})
export class AppComponent {
  constructor(public toastr: ToastrService) { }
  title = 'notesApp';
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
