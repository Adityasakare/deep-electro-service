import {Component,inject} from '@angular/core';
import {AsyncPipe,NgFor,NgIf} from '@angular/common';
import {WebsiteContentService} from '../../core/services/website-content.service';

@Component({
  standalone:true,
  selector:'app-services',
  imports:[AsyncPipe,NgFor,NgIf],
  template:`<ng-container *ngIf="content$|async as c">
    <section class="page-hero">
      <span class="eyebrow">DEEP ELECTRO SERVICES</span>
      <h1>{{c.services.title}}</h1>
      <p>{{c.services.description}}</p>
    </section>
    <section class="section">
      <div class="section-heading">
        <span class="eyebrow">WHAT WE DO</span>
        <h2>Practical support for your EV charging project</h2>
      </div>
      <div class="feature-panel services-list">
        <ul><li *ngFor="let item of c.services.items">{{item}}</li></ul>
      </div>
    </section>
    <section class="section zen-highlight" *ngIf="c.serviceDetails.zenBundle as zen">
      <div class="section-heading">
        <span class="eyebrow">BIJLIFY SERVICE PLAN</span>
        <h2><strong>{{zen.headline}}</strong></h2>
        <p>{{zen.introduction}}</p>
        <p>{{zen.summary}}</p>
      </div>
      <div class="feature-panel">
        <h3>{{zen.benefitsTitle}}</h3>
        <ul>
          <li *ngFor="let benefit of zen.benefits; let i = index">
            <strong *ngIf="i === 0">{{benefit}}</strong>
            <ng-container *ngIf="i !== 0">{{benefit}}</ng-container>
          </li>
        </ul>
        <h3>{{zen.whyTitle}}</h3>
        <p>{{zen.whyDescription}}</p>
        <p><strong>{{zen.closing}}</strong></p>
      </div>
    </section>
    <section class="coverage-section services-coverage" aria-label="Service coverage areas">
      <div class="coverage-heading">
        <span class="eyebrow">OUR SERVICE LOCATIONS</span>
        <h2>Serving customers across key cities and regions</h2>
      </div>
      <div class="coverage-marquee">
        <div class="coverage-track">
          <span *ngFor="let area of c.services.coverageAreas">{{area}}</span>
          <span *ngFor="let area of c.services.coverageAreas" aria-hidden="true">{{area}}</span>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-heading">
        <span class="eyebrow">TECHNICAL & OPERATIONAL SUPPORT</span>
        <h2>{{c.serviceDetails.title}}</h2>
        <p>{{c.serviceDetails.description}}</p>
      </div>
      <div class="section split">
        <div class="feature-panel">
          <h3>Hardware management</h3>
          <ul><li *ngFor="let item of c.serviceDetails.hardware">{{item}}</li></ul>
        </div>
        <div class="feature-panel">
          <h3>Software management</h3>
          <ul><li *ngFor="let item of c.serviceDetails.software">{{item}}</li></ul>
        </div>
      </div>
      <p class="disclaimer">{{c.serviceDetails.note}}</p>
    </section>
  </ng-container>`
})
export class ServicesComponent {
  private s=inject(WebsiteContentService);
  content$=this.s.load();
}
