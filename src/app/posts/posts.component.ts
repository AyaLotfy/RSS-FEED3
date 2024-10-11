import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriesComponent } from '../categories/categories.component';
import { RSS } from '../model/rss.model';
import { PostComponent } from '../post/post.component';
import { DataService } from '../services/data.service';
import { RssFeedService } from '../services/rss-feed.service';
import { SideComponent } from '../side/side.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [SideComponent, HttpClientModule, CommonModule, NgxPaginationModule, PostComponent],
  providers: [RssFeedService, DataService, HttpClient],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  p: number = 1;
  feeds:RSS[] =[];
  constructor(@Inject(PLATFORM_ID) private platformId: Object){
   
    }

    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        let jsonFeeds = sessionStorage.getItem("session_feeds");
        if(jsonFeeds!= undefined){
          this.feeds = JSON.parse(jsonFeeds);
       }
    }
  }
   
}
