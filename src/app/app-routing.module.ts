import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import {TermsAndConditionsComponent} from './pages/terms-and-conditions/terms-and-conditions.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

type NewType = Routes;

const routes: NewType = [
 { path: '' , component: HomeComponent },
 { path: 'category/:category/:id', component: SingleCategoryComponent },
 { path: 'post/:id', component: SinglePostComponent },
 
 { path: 'about', component: AboutUsComponent },
 { path: 'terms-conditions', component: TermsAndConditionsComponent },
 { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
