import { Component, Input } from '@angular/core';
import { RSS } from '../model/rss.model';
import { SideComponent } from '../side/side.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [SideComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
@Input() feed: RSS = new RSS() ;
}
