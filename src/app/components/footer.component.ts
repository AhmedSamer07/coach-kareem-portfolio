import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span class="text-xl font-bold text-white tracking-wider">COACH <span class="text-brand-ice">KAREEM</span></span>
          <p class="text-xs text-slate-500 mt-1">High Performance Fitness & Nutrition Coaching</p>
        </div>

        <div class="flex gap-6 text-sm">
          <a href="https://instagram.com" target="_blank" class="hover:text-brand-ice transition">Instagram</a>
          <a href="https://facebook.com" target="_blank" class="hover:text-brand-ice transition">Facebook</a>
          <a href="https://wa.me/201558298988" target="_blank" class="hover:text-brand-ice transition">WhatsApp</a>
        </div>

        <p class="text-xs text-slate-600">© 2026 Coach Kareem. All rights reserved.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}