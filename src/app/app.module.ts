import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BioComponent } from './bio/bio.component';
import { BandsComponent } from './bands/bands.component';
import { BeautifulSunshineComponent } from './beautiful-sunshine/beautiful-sunshine.component';
import { VideoComponent } from './video/video.component';
import { GigsComponent } from './gigs/gigs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    BioComponent,
    BandsComponent,
    BeautifulSunshineComponent,
    VideoComponent,
    GigsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
