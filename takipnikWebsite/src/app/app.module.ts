import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Modules
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { VideosComponent } from './videos/videos.component';
import { ShowsComponent } from './shows/shows.component';
import { MerchComponent } from './merch/merch.component';

//routing
import appRoutes from './routing';

//third party
import bootstrap from "bootstrap";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    GalleryComponent,
    ContactComponent,
    VideosComponent,
    ShowsComponent,
    MerchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
