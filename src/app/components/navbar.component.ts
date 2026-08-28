import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" class="text-2xl font-black tracking-wider text-white">
          COACH <span class="text-brand-ice">KAREEM</span>
        </a>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" class="hover:text-brand-ice transition-colors">About</a>
          <a href="#transformations" class="hover:text-brand-ice transition-colors">Transformations</a>
          <a href="#packages" class="hover:text-brand-ice transition-colors">Packages</a>
          <a href="#calculator" class="hover:text-brand-ice transition-colors">Calculator</a>
        </nav>

        <a href="#packages" class="hidden md:inline-flex bg-brand-ice text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-sky-300 transition shadow-[0_0_20px_rgba(56,189,248,0.35)]">
          Join Now
        </a>

        <!-- Mobile Hamburger -->
        <button (click)="toggleMenu()" class="md:hidden text-white focus:outline-none" aria-label="Toggle menu">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="isOpen() ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown -->
      <div *ngIf="isOpen()" class="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
        <a href="#about" (click)="toggleMenu()" class="block text-slate-300 hover:text-brand-ice py-1">About</a>
        <a href="#transformations" (click)="toggleMenu()" class="block text-slate-300 hover:text-brand-ice py-1">Transformations</a>
        <a href="#packages" (click)="toggleMenu()" class="block text-slate-300 hover:text-brand-ice py-1">Packages</a>
        <a href="#calculator" (click)="toggleMenu()" class="block text-slate-300 hover:text-brand-ice py-1">Calculator</a>
      </div>
    </header>
  `
})
export class NavbarComponent {
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(val => !val);
  }
}