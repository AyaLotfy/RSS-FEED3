import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { SearchComponent } from '../search/search.component';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [SearchComponent, CategoriesComponent, WidgetComponent],
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {

}
