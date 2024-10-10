import { Component } from '@angular/core';
import { SideComponent } from '../side/side.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [SideComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

}
