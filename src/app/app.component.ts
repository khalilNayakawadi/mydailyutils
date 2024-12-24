import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './mydailyutils/navbar/navbar.component';
import { HeroComponent } from './mydailyutils/hero/hero.component';
import { StartingModalComponent } from './starting-modal/starting-modal.component';
@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    RouterModule,
    HeroComponent,
    StartingModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
    startinModal = false;

    ngOnInit() {

      this.startinModal = true;
    }

  }
