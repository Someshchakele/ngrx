import { Routes } from '@angular/router';
import { Counterdisplay } from "./component/counterdisplay/counterdisplay";
import { Blog } from "./component/blog/blog";
import { Layout } from './layout/layout';

export const routes: Routes = [
    {
        path: '',
        component:Layout,
        children: [
            {
        path: 'counter-display',
        component: Counterdisplay
          },
             {
        path: 'blog',
        component: Blog
    },
        ]
    },
   
    
];
