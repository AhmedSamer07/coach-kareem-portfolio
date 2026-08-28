import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="packages" class="py-24 bg-brand-darkest text-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-xs font-bold text-brand-primary tracking-widest uppercase mb-2">Pricing</h2>
          <h3 class="text-4xl font-extrabold text-white">Coaching Packages</h3>
          <p class="text-brand-light/70 mt-3">Choose the tier that matches your goals. Custom macros and 24/7 support included.</p>
        </div>

        <!-- Changed to a 4-column grid for desktop -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <div 
            *ngFor="let pkg of packages"
            [class]="pkg.isPopular 
              ? 'relative bg-brand-dark border-2 border-brand-primary rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(80,200,120,0.15)]' 
              : 'relative bg-brand-darkest border border-brand-dark rounded-3xl p-6 lg:p-8 flex flex-col justify-between hover:border-brand-primary transition'"
          >
            <span *ngIf="pkg.isPopular" class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-primary text-brand-darkest font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
              Most Popular
            </span>

            <div>
              <h4 class="text-xl lg:text-2xl font-bold mb-2">{{ pkg.title }}</h4>
              <div class="flex items-baseline gap-1 mb-6">
                <span class="text-3xl lg:text-4xl font-extrabold text-white">{{ pkg.price }}</span>
                <span class="text-brand-light/70 text-xs lg:text-sm">{{ pkg.duration }}</span>
              </div>

              <ul class="space-y-3.5 mb-8">
                <li *ngFor="let feat of pkg.features" class="flex items-start gap-3 text-white/90 text-sm">
                  <svg class="w-5 h-5 text-brand-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span dir="rtl" class="w-full text-right leading-relaxed">{{ feat }}</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://docs.google.com/forms/d/1e4krx5h2fnsHlywtCPpOL9CmVgU5PzYqAAin5NoJEYU/viewform"
              target="_blank"
              [class]="pkg.isPopular 
                ? 'w-full py-3.5 rounded-xl font-bold bg-brand-primary text-brand-darkest text-center hover:brightness-110 transition shadow mt-auto' 
                : 'w-full py-3.5 rounded-xl font-bold bg-brand-dark text-white text-center hover:bg-brand-dark/80 transition mt-auto'"
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
}