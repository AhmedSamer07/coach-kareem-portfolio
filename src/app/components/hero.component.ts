import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="relative pt-36 pb-0 md:pt-48 bg-brand-darkest text-white overflow-hidden">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-dark/30 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 pb-20 md:pb-32">
        <div>
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-dark/40 border border-brand-dark text-brand-light text-xs font-semibold mb-6">
            <span class="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            Accepting New Online Clients
          </div>

          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Transform Your Body, <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-light">
              Elevate Your Life.
            </span>
          </h1>

          <p class="text-brand-light/80 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
            Certified Fitness & Nutrition Specialist. I craft scientifically backed workout splits and flexible diets tailored to your busy schedule.
          </p>

          <div class="flex flex-wrap gap-4">
            <a href="#packages" class="bg-brand-primary text-brand-darkest px-8 py-3.5 rounded-full font-bold hover:brightness-110 transition shadow-[0_0_25px_rgba(80,200,120,0.4)]">
              View Coaching Plans
            </a>
            <a href="#transformations" class="border border-brand-dark bg-brand-darkest hover:bg-brand-dark text-white px-8 py-3.5 rounded-full font-semibold transition">
              See Results
            </a>
          </div>

          <div class="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-brand-dark/50">
            <div>
              <p class="text-3xl font-extrabold text-white">50+</p>
              <p class="text-xs text-brand-light/60 uppercase tracking-wider mt-1">Clients Trained</p>
            </div>
            <div>
              <p class="text-3xl font-extrabold text-white">99%</p>
              <p class="text-xs text-brand-light/60 uppercase tracking-wider mt-1">Success Rate</p>
            </div>
          </div>
        </div>

        <div class="flex justify-center lg:justify-end">
          <div class="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px] rounded-full p-2 bg-gradient-to-tr from-brand-primary via-brand-dark to-brand-darkest shadow-2xl transition-transform duration-700 hover:scale-105">
            <img 
              src="assets/coach2.png" 
              alt="Coach Kareem" 
              class="w-full h-full object-cover rounded-full border-4 border-brand-darkest"
            />
          </div>
        </div>
      </div>

      <div class="relative z-10 border-t border-brand-dark/50 bg-brand-darkest/80 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-6 py-12">
          <p class="text-center text-sm font-bold text-brand-light/60 uppercase tracking-widest mb-10">Certifications & Credentials</p>
          
          <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img 
              src="assets/cert1.jpg" 
              alt="Certification 1" 
              (click)="openCertificate('assets/cert1.png')"
              class="h-48 md:h-64 w-auto object-contain rounded-md shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-brand-dark hover:scale-[1.15] hover:z-20 relative transition-transform duration-300 cursor-pointer bg-white"
            />
            <img 
              src="assets/cert2.png" 
              alt="Certification 2"
              (click)="openCertificate('assets/cert2.png')" 
              class="h-48 md:h-64 w-auto object-contain rounded-md shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-brand-dark hover:scale-[1.15] hover:z-20 relative transition-transform duration-300 cursor-pointer bg-white"
            />
          </div>
        </div>
      </div>
    </section>

    <div *ngIf="selectedCert()" class="fixed inset-0 z-[100] flex items-center justify-center bg-brand-darkest/95 backdrop-blur-md p-4" (click)="closeCertificate()">
      <button (click)="closeCertificate()" class="absolute top-4 right-4 md:top-8 md:right-8 text-brand-light/60 hover:text-white transition z-50 bg-brand-darkest p-2 rounded-full">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
      <div class="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center">
        <img [src]="selectedCert()" class="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-fade-in" (click)="$event.stopPropagation()">
      </div>
    </div>
  `
})
export class HeroComponent {
  selectedCert = signal<string | null>(null);

  openCertificate(certPath: string) {
    this.selectedCert.set(certPath);
    document.body.style.overflow = 'hidden'; 
  }

  closeCertificate() {
    this.selectedCert.set(null);
    document.body.style.overflow = 'auto'; 
  }
}