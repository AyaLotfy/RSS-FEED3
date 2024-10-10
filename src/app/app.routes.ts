import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    {path:"", component:PostsComponent},
    {path:"post", component:PostComponent},

];
