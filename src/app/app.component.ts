import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './mydailyutils/navbar/navbar.component';
import { HeroComponent } from './mydailyutils/hero/hero.component';
@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    RouterModule,
    HeroComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
    startinModal = false;
  }
