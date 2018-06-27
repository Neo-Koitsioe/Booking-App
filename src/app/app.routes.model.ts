import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { ViewComponent } from './component/view/view.component';
import { BookComponent } from './component/book/book.component';
import { HomeComponent } from './component/home/home.component';


export const AppRoutes = [
    {path: '', component: HomeComponent},
    {path: 'view', component: ViewComponent},
    {path: 'book', component: BookComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},

    
    
]