import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenusuperiorComponent } from './menusuperior/menusuperior.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FooterComponent } from './footer/footer.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MigadepanComponent } from './migadepan/migadepan.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { BusquedaService } from './busqueda.service';

import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { SongComponent } from './song/song.component';
import { HomeComponent } from './home/home.component';
import {Ng2BreadcrumbModule, BreadcrumbService} from '../../node_modules/ng2-breadcrumb/ng2-breadcrumb';
import { ArtistPopularityPipe } from './artist-popularity.pipe';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'Artist' , component: ArtistComponent},
  {path: 'Album' , component: AlbumComponent},
  {path: 'Song' , component: SongComponent}

];


export const routing = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    MenusuperiorComponent,
    CuerpoComponent,
    FooterComponent,
    CabeceraComponent,
    MigadepanComponent,
    ArtistComponent,
    AlbumComponent,
    SongComponent,
    HomeComponent,
    ArtistPopularityPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2BreadcrumbModule.forRoot(),
    DropdownModule.forRoot()
  ],
  providers: [BusquedaService,BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
