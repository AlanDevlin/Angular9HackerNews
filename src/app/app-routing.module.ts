import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { NgModule } from '@angular/core';
import { AskComponent } from './pages/ask/ask.component';
import { ShowComponent } from './pages/show/show.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LoginComponent } from './pages/login/login.component';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';

const routes: Routes = [
    //Redirect to newest page on load
    { path: '', component: TopStoriesComponent},
    { path: 'news', 
      component: TopStoriesComponent 
    }, 
    { path: 'newest', 
      component: NewsComponent 
    }, 
  {
    path: 'ask',
    component: AskComponent
  },
  {
    path: 'show',
    component: ShowComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  ];

  @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
  })
  export class AppRoutingModule {}