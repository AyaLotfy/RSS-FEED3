import { Component } from '@angular/core';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
// import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, IntroComponent, PostsComponent, 
            FooterComponent, BrowserAnimationsModule // required animations module
            ],
  providers: [NotificationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private notificationService: NotificationService) {}

  notify() {
    // this.notificationService.showSuccess('Data saved successfully!', 'Success');
  }
}
