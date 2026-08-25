import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="about" class="relative pt-36 pb-20 md:pt-48 md:pb-32 bg-slate-900 text-white overflow-hidden">
      <!-- Glow background accent -->
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-ice/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-brand-ice text-xs font-semibold mb-6">
            <span class="w-2 h-2 rounded-full bg-brand-ice animate-pulse"></span>
            Accepting New Online Clients
          </div>

          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Transform Your Body, <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-ice to-cyan-400">
              Elevate Your Life.
            </span>
          </h1>

          <p class="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
            Certified Fitness & Nutrition Specialist. I craft scientifically backed workout splits and flexible diets tailored to your busy schedule.
          </p>

          <div class="flex flex-wrap gap-4">
            <a href="#packages" class="bg-brand-ice text-slate-950 px-8 py-3.5 rounded-full font-bold hover:bg-sky-300 transition shadow-[0_0_25px_rgba(56,189,248,0.4)]">
              View Coaching Plans
            </a>
            <a href="#transformations" class="border border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-semibold transition">
              See Results
            </a>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-slate-800/80">
            <div>
              <p class="text-3xl font-extrabold text-white">500+</p>
              <p class="text-xs text-slate-400 uppercase tracking-wider mt-1">Clients Trained</p>
            </div>
            <div>
              <p class="text-3xl font-extrabold text-brand-ice">8+ Yrs</p>
              <p class="text-xs text-slate-400 uppercase tracking-wider mt-1">Experience</p>
            </div>
            <div>
              <p class="text-3xl font-extrabold text-white">99%</p>
              <p class="text-xs text-slate-400 uppercase tracking-wider mt-1">Success Rate</p>
            </div>
          </div>
        </div>

        <!-- Coach Photo with smooth entrance styling -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px] rounded-full p-2 bg-gradient-to-tr from-brand-ice via-sky-600 to-slate-800 shadow-2xl transition-transform duration-700 hover:scale-105">
            <img 
              src="assets/coach1.jpg" 
              alt="Coach Kareem" 
              class="w-full h-full object-cover rounded-full border-4 border-slate-900"
            />
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}