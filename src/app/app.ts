import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { WebsiteContentService } from './core/services/website-content.service';
@Component({
 selector:'app-root', standalone:true, imports:[RouterLink,RouterLinkActive,RouterOutlet,AsyncPipe,NgFor,NgIf],
 template:`<ng-container *ngIf="content$ | async as content">
 <header class="site-header"><a class="brand" routerLink="/"><img [src]="content.site.logo" alt="Deep Electro Services logo"><span>{{content.site.companyName}}<small>EV CHARGING SOLUTIONS</small></span></a>
 <nav aria-label="Main navigation"><a *ngFor="let item of content.navigation" [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">{{item.label}}</a></nav>
 <div class="header-actions"><button class="theme-toggle" type="button" (click)="toggleTheme()" [attr.aria-label]="darkMode ? 'Switch to light theme' : 'Switch to dark theme'">{{darkMode ? '☀ Light' : '☾ Dark'}}</button><a class="header-cta" [href]="content.site.enquiryUrl" target="_blank" rel="noopener">Enquire now <span aria-hidden="true">↗</span></a></div></header>
 <main><router-outlet /></main>
 <footer class="footer"><div><a class="brand footer-brand" routerLink="/"><img [src]="content.site.logo" alt=""><span>{{content.site.companyName}}</span></a><p>{{content.footer.text}}</p><a class="app-download" [href]="content.site.appUrl" target="_blank" rel="noopener"><img [src]="content.site.bijlifyLogo" alt="Bijlify logo"><span><strong>{{content.footer.appLabel}}</strong><small>{{content.footer.appDescription}}</small></span></a></div><div><h3>Explore</h3><a *ngFor="let item of content.navigation" [routerLink]="item.path">{{item.label}}</a></div><div><h3>Get in touch</h3><p>For product information and project enquiries, connect with deepelectroservices@gmail.com</p><a class="footer-enquiry" [href]="content.site.enquiryUrl" target="_blank" rel="noopener">Submit an enquiry ↗</a></div><div class="copyright">{{content.footer.copyright}}</div></footer></ng-container>`
})
export class AppComponent {
 private readonly service=inject(WebsiteContentService);
 readonly content$=this.service.load();
 darkMode=false;
 toggleTheme():void { this.darkMode=!this.darkMode; document.body.classList.toggle('dark-theme',this.darkMode); }
}
