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
            class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer group"
            (click)="openGallery(item)"
          >
            <!-- Show the first image as the main cover -->
            <div class="w-full relative overflow-hidden bg-slate-900">
              <img [src]="item.images[0]" [alt]="item.name + ' Transformation'" class="w-full h-auto block transition-transform duration-700 group-hover:scale-105">
              
              <!-- Indicator showing how many extra photos there are -->
              <div *ngIf="item.images.length > 1" class="absolute top-3 right-3 bg-slate-950/70 text-white px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                +{{item.images.length - 1}}
              </div>
            </div>

            <!-- Card Details -->
            <div class="p-5 flex items-center justify-between bg-white border-t border-slate-100">
              <div>
                <h4 class="font-bold text-slate-900">{{ item.name }}</h4>
                <p class="text-xs text-slate-500">{{ item.duration }} of coaching</p>
              </div>
              <span class="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
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

    <!-- FULL SCREEN IMAGE GALLERY MODAL -->
    <div *ngIf="selectedClient()" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4">
      
      <!-- Close Button -->
      <button (click)="closeGallery()" class="absolute top-4 right-4 md:top-8 md:right-8 text-slate-400 hover:text-white transition z-50 bg-slate-900/50 p-2 rounded-full">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="relative w-full max-w-5xl h-full max-h-[85vh] flex items-center justify-center">
        <!-- Current Displayed Image -->
        <img [src]="selectedClient().images[currentImgIndex()]" class="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-fade-in">

        <!-- Left Arrow (Only show if there is more than 1 image) -->
        <button *ngIf="selectedClient().images.length > 1" (click)="prevImage($event)" class="absolute left-0 md:-left-12 bg-slate-800/80 hover:bg-sky-500 text-white p-3 rounded-full transition shadow-lg">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        <!-- Right Arrow (Only show if there is more than 1 image) -->
        <button *ngIf="selectedClient().images.length > 1" (click)="nextImage($event)" class="absolute right-0 md:-right-12 bg-slate-800/80 hover:bg-sky-500 text-white p-3 rounded-full transition shadow-lg">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
        </button>
        
        <!-- Image Counter indicator at bottom -->
        <div *ngIf="selectedClient().images.length > 1" class="absolute -bottom-10 left-1/2 -translate-x-1/2 text-slate-400 font-semibold tracking-widest text-sm">
          {{ currentImgIndex() + 1 }} / {{ selectedClient().images.length }}
        </div>
      </div>
    </div>
  `
})
export class TransformationsComponent {
  private dataService = inject(DataService);
  allTransformations = this.dataService.transformations;
  
  showAll = signal(false);
  
  // Variables to manage the popup gallery
  selectedClient = signal<any>(null);
  currentImgIndex = signal(0);

  toggleShowAll() {
    this.showAll.update(val => !val);
  }

  // Opens the gallery and locks scrolling on the background page
  openGallery(client: any) {
    this.selectedClient.set(client);
    this.currentImgIndex.set(0);
    document.body.style.overflow = 'hidden'; 
  }

  // Closes gallery and restores background scrolling
  closeGallery() {
    this.selectedClient.set(null);
    document.body.style.overflow = 'auto'; 
  }

  nextImage(event: Event) {
    event.stopPropagation(); // Prevents click from accidentally closing the popup
    const client = this.selectedClient();
    if (client) {
      const nextIndex = (this.currentImgIndex() + 1) % client.images.length;
      this.currentImgIndex.set(nextIndex);
    }
  }

  prevImage(event: Event) {
    event.stopPropagation();
    const client = this.selectedClient();
    if (client) {
      const prevIndex = (this.currentImgIndex() - 1 + client.images.length) % client.images.length;
      this.currentImgIndex.set(prevIndex);
    }
  }
}