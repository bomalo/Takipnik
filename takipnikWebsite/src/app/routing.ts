import { Routes } from '@angular/router';
//Components
import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { VideosComponent } from './videos/videos.component';
import { ShowsComponent } from './shows/shows.component';
import { MerchComponent } from './merch/merch.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'music',
    component: MusicComponent
  },
  { path: 'gallery',
    component: GalleryComponent
  },
  { path: 'contact',
    component: ContactComponent
  },
  { path: 'videos',
    component: VideosComponent
  },
  { path: 'shows',
    component: ShowsComponent
  },
  { path: 'merch',
    component: MerchComponent
  }
];
export default appRoutes;