import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 

//Components
import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { VideosComponent } from './videos/videos.component';
import { ShowsComponent } from './shows/shows.component';
import { MerchComponent } from './merch/merch.component';
import { HomeComponent } from './home/home.component';

//routing
import appRoutes from './routing';

//service
import { Service } from './service'

//third party
import bootstrap from "bootstrap";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ProductComponent } from './product/product.component'

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    GalleryComponent,
    ContactComponent,
    VideosComponent,
    ShowsComponent,
    MerchComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
