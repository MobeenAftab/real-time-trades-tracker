import { Navbar } from './components/navbar/navbar';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heartbeat } from './services/heartbeat';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
  hb = inject(Heartbeat);

  getStatus() {
    this.hb.getServerStatus();
  }

  OnInit() {
    this.getStatus();
    console.warn('DONE')
  }
}
