import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-myutilities',
  imports: [RouterModule,CommonModule],
  templateUrl: './myutilities.component.html',
  styleUrl: './myutilities.component.css',
})
export class MyutilitiesComponent {
  myUtilitiesCards: myutilities[] = [
    {
      utilIcon: 'https://cdn.dribbble.com/users/4241563/screenshots/11874468/media/7796309c77cf752615a3f9062e6a3b3d.gif',
      utilHeading: 'To-Do App',
      utilDescription: 'Organize and manage your daily tasks efficiently.',
      utilAccessLink: 'https://khalilnayakawadi.github.io/To-Do-App/'
    },
    {
      utilIcon: 'https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif',
      utilHeading: 'Weather App',
      utilDescription: 'Get real-time weather updates for your location.',
      utilAccessLink: 'https://khalilnayakawadi.github.io/WeatherAppByKhalil/',
    },
    {
      utilIcon: 'https://i.pinimg.com/originals/11/64/91/1164913b4932faae0fe871859b01684b.gif',
      utilHeading: 'Calculator',
      utilDescription: 'Perform Daily Operation in very efficient way.',
      utilAccessLink: '',
    },
    {
      utilIcon: 'https://www.clio.com/wp-content/uploads/2017/09/Best-Books-for-Lawyers-550x288.png',
      utilHeading: 'Text-Utils',
      utilDescription: 'Seamless text related fuctionality that performs text operation.',
      utilAccessLink: '',
    },
    {
      utilIcon: 'https://cdn.dribbble.com/users/108183/screenshots/5288723/media/dfe7b7331a33aae7b483343f14106a9c.gif',
      utilHeading: 'Tic Tac Toe',
      utilDescription: 'play game with your friend and have a fun.',
      utilAccessLink: '',
    },
    {
      utilIcon: 'https://i.pinimg.com/originals/cf/47/58/cf4758123c457ca0ac2dba1e6b373a30.gif',
      utilHeading: 'Notes',
      utilDescription: 'Capture Every Thought, Anytime, Anywhere!" 📝✨',
      utilAccessLink: '',
    },
    {
      utilIcon: 'https://cdn.dribbble.com/users/2234447/screenshots/9055055/stopwatch.gif',
      utilHeading: "Timer & Stopwatch ",
      utilDescription:"- Let's race against time! 🚀✨ boost your speed.",
      utilAccessLink: '',
    },
    {
      utilIcon: 'https://gifdb.com/images/high/breaking-news-reporter-making-gestures-animation-87x1lnh5emlcgj7d.gif',
      utilHeading: 'News Feed',
      utilDescription: 'Stay updated with the latest news and headlines.',
      utilAccessLink: '',
    },
  ];
}

interface myutilities {
  utilIcon: string;
  utilHeading: string;
  utilDescription: string;
  utilAccessLink: string;
}
