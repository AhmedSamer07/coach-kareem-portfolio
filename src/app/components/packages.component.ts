import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="packages" class="py-24 bg-slate-900 text-white relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-xs font-bold text-brand-ice tracking-widest uppercase mb-2">Pricing</h2>
          <h3 class="text-4xl font-extrabold">Coaching Packages</h3>
          <p class="text-slate-400 mt-3">Choose the tier that matches your goals. Custom macros and 24/7 support included.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 items-stretch">
          <div 
            *ngFor="let pkg of packages"
            [class]="pkg.isPopular 
              ? 'relative bg-slate-800/90 border-2 border-brand-ice rounded-3xl p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(56,189,248,0.15)]' 
              : 'relative bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition'"
          >
            <span *ngIf="pkg.isPopular" class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-ice text-slate-950 font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </span>

            <div>
              <h4 class="text-2xl font-bold mb-2">{{ pkg.title }}</h4>
              <div class="flex items-baseline gap-1 mb-6">
                <span class="text-4xl font-extrabold text-white">{{ pkg.price }}</span>
                <span class="text-slate-400 text-sm">{{ pkg.duration }}</span>
              </div>

              <ul class="space-y-3.5 mb-8">
                <li *ngFor="let feat of pkg.features" class="flex items-start gap-3 text-slate-300 text-sm">
                  <svg class="w-5 h-5 text-brand-ice shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>

            <a 
              [href]="'https://wa.me/201558298988?text=' + getWhatsAppMessage(pkg.title)"
              target="_blank"
              [class]="pkg.isPopular 
                ? 'w-full py-3.5 rounded-xl font-bold bg-brand-ice text-slate-950 text-center hover:bg-sky-300 transition shadow' 
                : 'w-full py-3.5 rounded-xl font-bold bg-slate-800 text-white text-center hover:bg-slate-700 transition'"
            >
              Choose Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PackagesComponent {
  private dataService = inject(DataService);
  packages = this.dataService.packages;

  getWhatsAppMessage(planTitle: string): string {
    return encodeURIComponent(`Hello Coach Kareem, I want to start with the ${planTitle} package!`);
  }
}