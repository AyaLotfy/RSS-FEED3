import { Component, Inject, Output, PLATFORM_ID } from '@angular/core';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
// import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RSS } from './model/rss.model';
import { PostComponent } from './post/post.component';
import { DataService } from './services/data.service';
import { RssFeedService } from './services/rss-feed.service';
import { SideComponent } from './side/side.component';
import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, IntroComponent, PostsComponent, 
            FooterComponent, 
            MatSnackBarModule, SideComponent, HttpClientModule, 
            CommonModule, NgxPaginationModule, PostComponent],
            
  providers: [RssFeedService, DataService, HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

 
  @Output()  
  feeds: RSS[] = [];
  feedUrls: string[] = [
    "http://rss.cnn.com/rss/money_autos.rss"
  ];
  // @Output()
  categories: string[] = [];

  private intervalSubscription: Subscription | undefined;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private snackBar: MatSnackBar, private rssFeedService: RssFeedService, 
    private dataService: DataService, private http: HttpClient) {
      // this.openSnackBar()
     
     }

  ngOnInit(): void {
  
    

    // Optionally fetch data immediately on component load
    
    // this.intervalSubscription = interval(60000) // 15000ms = 15 sec
    // // this.intervalSubscription = interval(600000) // 600000ms = 10 minutes
    // .pipe(switchMap(() => 
    // this.dataService.getUrls()))
    // .subscribe((response: any) => {
    //   response.categories.forEach((category: any) => {
    //     response.data[category].forEach((feedUrl: string) => {
          
    //       this.rssFeedService.fetchFeed(feedUrl).subscribe(
            

    //         {
    //           next: (feedData) => {
    //           const items = feedData.items;
    //           this.feeds.push(...items);  // Append the items to the feeds array          },
    //           },
    //           error: (error: Error) => {
                
    //             console.error('There was an error!', feedUrl);  // Log error
    //           }
    //         }
          
    //       );
    //     });
    //     if (isPlatformBrowser(this.platformId)) {
    //       sessionStorage.setItem("session_feeds", JSON.stringify(this.feeds));
    //       console.log("save ")
    //     }
    //   });
    // });
    // //end of the rss fetching block
    this.dataService.getUrls()
    .subscribe((response: any) => {
      response.categories.forEach((category: any) => {
        this.categories = response.categories;
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
        if (isPlatformBrowser(this.platformId)) {
          sessionStorage.setItem("session_feeds", JSON.stringify(this.feeds));
          console.log("save ")
          this.openSnackBar();
        }
      });
    });
  }

  // ngAfterViewInit() {
    // setInterval(() => {
    //   this.rssFeedService.fetchFeed(this.feedUrls[0]).subscribe(
    //     (response) => {
    //       this.feeds = response;
    //               if (isPlatformBrowser(this.platformId)) {
    //         sessionStorage.setItem("session_feeds", JSON.stringify(this.feeds));
    //         console.log("save ")
    //       }
    //       console.log('Initial data:', this.feeds);
    //     },
    //     (error) => {
    //       console.error('Error fetching initial data:', error);
    //     }
    //   );
    // }, 3000);
    //Interval is use to refresh/timeout page, 10000 = 10s
// setInterval(data => {
//   console.log("etjshha");
//   // this.ReadSMSList();
//   }, 10000);
//   }
  openSnackBar() {
    // Open snackbar with a message and an action button
    const snackBarRef = this.snackBar.open(this.feeds[10].title, 'Open', {
      duration: 5000, // Auto dismiss after 5 seconds (or set to 0 for no auto-dismiss)
      horizontalPosition: 'right', // or 'start', 'end', 'left', 'right'
      verticalPosition: 'bottom', // or 'bottom'
    });

    // Handle the action button click
    snackBarRef.onAction().subscribe(() => {
      console.log(this.feeds[0].title);
      // Perform the desired action here, e.g., navigate, call a service, etc.
    });
  }
}
