import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, shareReplay, tap } from 'rxjs';
import { WebsiteContent } from '../../models/website-content.model';

const FALLBACK: WebsiteContent = {
  site:{title:'Deep Electro Services',companyName:'Deep Electro Services',tagline:'EV charging solutions',description:'EV charging product guidance.',logo:'/assets/images/company-logo-placeholder.svg',primaryCta:{label:'Contact us',href:'/contact'},phone:'',email:'',address:'Maharashtra, India',socialLinks:[]},
  navigation:[{label:'Home',path:'/'},{label:'Products',path:'/products'},{label:'Contact',path:'/contact'}],
  home:{eyebrow:'EV charging',headline:'Charging solutions for every journey.',description:'Explore AC and DC EV charging solutions.',primaryCta:'Explore products',secondaryCta:'Contact us',highlights:[]},
  about:{title:'About us',description:'Deep Electro Services supports EV charging projects.',experience:'',principles:[]},
  products:[],applications:{title:'Applications',description:'',items:[]},services:{title:'Services',items:[]},
  zenBundle:{title:'Zen Bundle',rate:'',description:'',hardware:[],software:[],note:''},whyUs:{title:'Why choose us',items:[]},
  faqs:[],contact:{title:'Contact us',description:'',phone:'',email:'',address:'',formFields:[],formNotice:''},
  footer:{text:'',copyright:''},seo:{defaultTitle:'Deep Electro Services',defaultDescription:'EV charging solutions'}
};

@Injectable({providedIn:'root'})
export class WebsiteContentService {
  private readonly http = inject(HttpClient);
  private readonly content$: Observable<WebsiteContent> = this.http.get<WebsiteContent>('assets/config/website-content.json').pipe(
    tap(content => this.content = content),
    catchError(error => { console.error('Website content could not be loaded; using fallback.', error); this.content = FALLBACK; return of(FALLBACK); }),
    shareReplay(1)
  );
  content: WebsiteContent = FALLBACK;
  load(): Observable<WebsiteContent> { return this.content$; }
}
