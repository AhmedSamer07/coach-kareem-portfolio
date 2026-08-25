import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transformations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="transformations" class="py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-xs font-bold text-sky-600 tracking-widest uppercase mb-2">Real Results</h2>
          <h3 class="text-4xl font-extrabold text-slate-900">Client Transformations</h3>
          <p class="text-slate-600 mt-3">Proof that consistency, tailored workouts, and accurate nutrition deliver tangible outcomes.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let item of (showAll() ? allTransformations : allTransformations.slice(0, 3))" 
            class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <!-- Before / After split -->
            <div class="flex h-64 relative bg-slate-200">
              <div class="w-1/2 relative border-r border-white/30 overflow-hidden">
                <img [src]="item.beforeImg" [alt]="item.name + ' Before'" class="w-full h-full object-cover">
                <span class="absolute bottom-2 left-2 bg-slate-950/70 text-white text-[11px] font-semibold px-2 py-0.5 rounded">Before</span>
              </div>
              <div class="w-1/2 relative overflow-hidden">
                <img [src]="item.afterImg" [alt]="item.name + ' After'" class="w-full h-full object-cover">
                <span class="absolute bottom-2 right-2 bg-brand-ice/90 text-slate-950 text-[11px] font-bold px-2 py-0.5 rounded">After</span>
              </div>
            </div>

            <!-- Card Details -->
            <div class="p-5 flex items-center justify-between bg-white border-t border-slate-100">
              <div>
                <h4 class="font-bold text-slate-900">{{ item.name }}</h4>
                <p class="text-xs text-slate-500">{{ item.duration }} of coaching</p>
              </div>
              <span class="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                {{ item.lostWeight }}
              </span>
            </div>
          </div>
        </div>

        <div class="text-center mt-12" *ngIf="allTransformations.length > 3">
          <button 
            (click)="toggleShowAll()" 
            class="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-full font-bold transition duration-200"
          >
            {{ showAll() ? 'Show Less' : 'View All Transformations' }}
          </button>
        </div>
      </div>
    </section>
  `
})
export class TransformationsComponent {
  private dataService = inject(DataService);
  allTransformations = this.dataService.transformations;
  showAll = signal(false);

  toggleShowAll() {
    this.showAll.update(val => !val);
  }
}