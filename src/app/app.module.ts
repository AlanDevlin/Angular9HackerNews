import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/*Load Hacker News API */
import { HackernewsApiService } from './services/hackernews-api.service';
/*Load Http Module */
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LoadingSpinnerWrapperComponent} from './common/loading-spinner-wrapper/loading-spinner-wrapper.component';
import { DisplayStoryWrapperComponent } from './common/display-stories/display-stories.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './pages/news/news.component';
import { AskComponent } from './pages/ask/ask.component';
import { ShowComponent } from './pages/show/show.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LoginComponent } from './pages/login/login.component';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';
import { NewsItemComponent } from './common/news-item/news-item.component';
import { DomainPipe } from './pipes/domain-pipe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    AskComponent,
    ShowComponent,
    JobsComponent,
    LoginComponent,
    TopStoriesComponent,
    NewsItemComponent,
    DomainPipe,
    LoadingSpinnerWrapperComponent,
    DisplayStoryWrapperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
    
  ],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
