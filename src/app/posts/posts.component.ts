import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriesComponent } from '../categories/categories.component';
import { RSS } from '../model/rss.model';
import { DataService } from '../services/data.service';
import { RssFeedService } from '../services/rss-feed.service';
import { SideComponent } from '../side/side.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [SideComponent, HttpClientModule, CommonModule, NgxPaginationModule],
  providers: [RssFeedService, DataService, HttpClient],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  feeds: RSS[] = [];
  feedUrls: string[] = [
    // 'https://feeds.bbci.co.uk/news/rss.xml',
    // 'http://rss.cnn.com/rss/money_technology.rss'
    "http://rss.cnn.com/rss/money_autos.rss"

  ];
  p: number = 1;
  constructor(private rssFeedService: RssFeedService, private dataService: DataService, private http: HttpClient) { }

  ngOnInit(): void {

    this.dataService.getUrls().subscribe((response: any) => {
      response.categories.forEach((category: any) => {
        response.data[category].forEach((feedUrl: string) => {
          
          this.rssFeedService.fetchFeed(feedUrl).subscribe(
            
            {
              next: (feedData) => {
              const items = feedData.items;
              this.feeds.push(...items);  // Append the items to the feeds array          },
              },
              error: (error: Error) => {
                
                console.error('There was an error!', feedUrl);  // Log error
              }
            }
          
          );
        });
        
      });
    });

  }
}
