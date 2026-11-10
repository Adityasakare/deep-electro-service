import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ProductsComponent } from './pages/products/products';
import { ApplicationsComponent } from './pages/applications/applications';
import { ZenBundleComponent } from './pages/zen-bundle/zen-bundle';
import { ContactComponent } from './pages/contact/contact';
export const routes: Routes = [
 {path:'',component:HomeComponent,title:'Home | Deep Electro Services'},
 {path:'about',component:AboutComponent,title:'About | Deep Electro Services'},
 {path:'products',component:ProductsComponent,title:'Products | Deep Electro Services'},
 {path:'applications',component:ApplicationsComponent,title:'Applications | Deep Electro Services'},
 {path:'zen-bundle',component:ZenBundleComponent,title:'Zen Bundle | Deep Electro Services'},
 {path:'contact',component:ContactComponent,title:'Contact | Deep Electro Services'},
 {path:'**',redirectTo:''}
];
