import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroComponent } from './mydailyutils/hero/hero.component';
import { MyutilitiesComponent } from './mydailyutils/myutilities/myutilities.component';
import { FeaturecardComponent } from './mydailyutils/featurecard/featurecard.component';
import { ContactusComponent } from './mydailyutils/contactus/contactus.component';

export const routes: Routes = [
    { path: '', redirectTo:"/home", pathMatch: 'full' },
    { path: 'home', component:FeaturecardComponent, pathMatch:'full'},
    { path :'myutilities', component:MyutilitiesComponent},
    { path :'contact', component:ContactusComponent},

    // { path:'textEditorApp', redirectTo:"https://khalilnayakawadi.github.io/Text-Editor/", pathMatch:"full"},
];
