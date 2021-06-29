import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginSignupServiceApi} from "./services/login-service/login-service.api";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { RecentPostComponent } from './components/shared/recent-post/recent-post.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { QuestionsComponent } from './components/shared/questions/questions.component';
import { NewFilterComponent } from './components/shared/new-filter/new-filter.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RecentPostComponent,
    PaginationComponent,
    QuestionsComponent,
    NewFilterComponent,
    CreatePostComponent,
    AboutUsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginSignupServiceApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
