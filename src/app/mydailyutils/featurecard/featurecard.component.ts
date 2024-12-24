import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-featurecard',
  imports: [CommonModule,RouterModule],
  templateUrl: './featurecard.component.html',
  styleUrl: './featurecard.component.css'
})
export class FeaturecardComponent {
  dailyUtilsFeatures: Feature[] = [
    {
      featureHeading: 'Easy Access',
      featureIcon:'https://cdn-icons-png.flaticon.com/512/8207/8207927.png',
      featureDescription: 'you can easily access on our portal.'
    },
    {
      featureHeading: 'Regular Updates',
      featureIcon: 'https://trustswap.com/wp-content/uploads/2021/09/inverted_token_icon.png',
      featureDescription: 'Get regular updates for new utilities.'
    },
    {
      featureHeading: 'User Friendly',
      featureIcon: 'https://cdn-icons-png.flaticon.com/512/616/616656.png',
      featureDescription: 'User friendly UI so user can use it very easily.'
    },
    {
      featureHeading: 'Online Availability',
      featureIcon: 'https://cdn-icons-png.flaticon.com/512/2165/2165828.png',
      featureDescription: 'Interconectivity makes it available all the time.'
    },
    {
      featureHeading: 'Most Loved',
      featureIcon: 'https://cdn-icons-png.flaticon.com/512/9484/9484251.png',
      featureDescription: 'Around 100K+ users used it before.'
    },
    {
      featureHeading: 'Valuable Feedbacks',
      featureIcon: 'https://cdn-icons-png.flaticon.com/512/742/742940.png',
      featureDescription: 'We values and consider feedbacks of every single user'
    },
    {
      featureHeading: 'Free To Use',
      featureIcon: 'https://cdn-icons-png.flaticon.com/512/743/743217.png',
      featureDescription: 'We do not charge any money for using our utilities.'
    },
    {
      featureHeading: '24x7 Support',
      featureIcon: 'https://cdn-icons-png.flaticon.com/512/4230/4230867.png',
      featureDescription: "We provide 24x7 support for resolving user's Query"
    }
  ];

}
interface Feature {
  featureHeading: string;
  featureIcon: string;
  featureDescription: string;
}
