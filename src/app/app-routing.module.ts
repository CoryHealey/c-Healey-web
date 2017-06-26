import { VideoComponent } from './video/video.component';
import { BeautifulSunshineComponent } from './beautiful-sunshine/beautiful-sunshine.component';
import { BandsComponent } from './bands/bands.component';
import { BioComponent } from './bio/bio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'bio', component: BioComponent },
  { path: 'bands', component: BandsComponent },
  { path: 'beautiful-sunshine', component: BeautifulSunshineComponent },
  { path: 'video', component: VideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
