import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-brand-darkest text-brand-light/70 py-12 border-t border-brand-dark">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span class="text-xl font-bold text-white tracking-wider">COACH <span class="text-brand-primary">KAREEM</span></span>
          <p class="text-xs text-brand-light/50 mt-1">High Performance Fitness & Nutrition Coaching</p>
        </div>

        <div class="flex gap-6 text-sm">
          <a href="https://www.instagram.com/kareemhmed_kfit?igsi=MWNqcmp6ZWpteGYyYg==" target="_blank" class="hover:text-brand-primary transition">Instagram</a>
          <a href="https://wa.me/201558298988" target="_blank" class="hover:text-brand-primary transition">WhatsApp</a>
        </div>

        <p class="text-xs text-brand-light/40">© 2026 Coach Kareem. All rights reserved.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}