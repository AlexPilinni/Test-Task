import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { TabFilmsComponent } from './tab-films/tab-films.component';
import { TabTelecanalsComponent } from './tab-telecanals/tab-telecanals.component';
import {RouterModule} from "@angular/router";
import { NavigationComponent } from './navigation/navigation.component';
import { BodyComponent } from './body/body.component';
import { CardFilmComponent } from './card-film/card-film.component';
import { CardGenreComponent } from './card-genre/card-genre.component';
import { CardChannelComponent } from './card-channel/card-channel.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormLoginComponent } from './form-login/form-login.component';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import { TabPlayerComponent } from './tab-player/tab-player.component';
import {AboutGuard} from "./about.guard";
import { CardCommentComponent } from './card-comment/card-comment.component';
import { FormNameComponent } from './form-name/form-name.component';
import { FilterPipe } from './Pipes/filter.pipe';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const routes = [
  {path: 'films', component: TabFilmsComponent, data: {animation: 'films'}},
  {path: 'canals', component: TabTelecanalsComponent, data: {animation: 'canals'}},
  {path: 'player/:id', component: TabPlayerComponent, canActivate: [AboutGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormSearchComponent,
    TabFilmsComponent,
    TabTelecanalsComponent,
    NavigationComponent,
    BodyComponent,
    CardFilmComponent,
    CardGenreComponent,
    CardChannelComponent,
    FormLoginComponent,
    TabPlayerComponent,
    CardCommentComponent,
    FormNameComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    AboutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
