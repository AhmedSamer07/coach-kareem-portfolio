import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transformations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="transformations" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-xs font-bold text-brand-dark tracking-widest uppercase mb-2">Real Results</h2>
          <h3 class="text-4xl font-extrabold text-brand-darkest">Client Transformations</h3>
          <p class="text-brand-dark/80 mt-3">Proof that consistency, tailored workouts, and accurate nutrition deliver tangible outcomes.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let item of (showAll() ? allTransformations : allTransformations.slice(0, 3))" 
            class="bg-white rounded-2xl overflow-hidden border border-brand-light shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
            (click)="openGallery(item)"
          >
            <div class="w-full relative overflow-hidden bg-brand-darkest">
              <img [src]="item.images[0]" [alt]="item.name + ' Transformation'" class="w-full h-auto block transition-transform duration-700 group-hover:scale-110">
              
              <div *ngIf="item.images.length > 1" class="absolute top-3 right-3 bg-brand-primary text-brand-darkest px-3 py-1.5 rounded-full text-xs font-extrabold shadow-lg flex items-center gap-1.5 border border-brand-light/50">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                {{item.images.length}} Photos
              </div>

              <div *ngIf="item.images.length > 1" class="absolute inset-0 bg-brand-darkest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div class="bg-white/95 text-brand-darkest px-6 py-3 rounded-full font-bold text-sm shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <svg class="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  Click to View Gallery
                </div>
              </div>
            </div>

            <div class="p-5 flex items-center justify-between bg-white border-t border-brand-light/50">
              <div>
                <h4 class="font-bold text-brand-darkest">{{ item.name }}</h4>
                <p class="text-xs text-brand-dark/70">{{ item.duration }} of coaching</p>
              </div>
              <span class="bg-brand-light/50 text-brand-dark font-bold text-xs px-3 py-1 rounded-full whitespace-nowrap">
                {{ item.lostWeight }}
              </span>
            </div>
          </div>
        </div>

        <div class="text-center mt-12" *ngIf="allTransformations.length > 3">
          <button 
            (click)="toggleShowAll()" 
            class="border-2 border-brand-darkest text-brand-darkest hover:bg-brand-darkest hover:text-white px-8 py-3 rounded-full font-bold transition duration-200"
          >
            {{ showAll() ? 'Show Less' : 'View All Transformations' }}
          </button>
        </div>
      </div>
    </section>

    <div *ngIf="selectedClient()" class="fixed inset-0 z-50 flex items-center justify-center bg-brand-darkest/95 backdrop-blur-md p-4">
      
      <button (click)="closeGallery()" class="absolute top-4 right-4 md:top-8 md:right-8 text-brand-light hover:text-white transition z-50 bg-brand-dark/50 p-2 rounded-full">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="relative w-full max-w-5xl h-full max-h-[85vh] flex items-center justify-center">
        <img [src]="selectedClient().images[currentImgIndex()]" class="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-fade-in">

        <button *ngIf="selectedClient().images.length > 1" (click)="prevImage($event)" class="absolute left-0 md:-left-12 bg-brand-dark/80 hover:bg-brand-primary text-white p-3 rounded-full transition shadow-lg">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        <button *ngIf="selectedClient().images.length > 1" (click)="nextImage($event)" class="absolute right-0 md:-right-12 bg-brand-dark/80 hover:bg-brand-primary text-white p-3 rounded-full transition shadow-lg">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
        </button>
        
        <div *ngIf="selectedClient().images.length > 1" class="absolute -bottom-10 left-1/2 -translate-x-1/2 text-brand-light font-semibold tracking-widest text-sm">
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
  selectedClient = signal<any>(null);
  currentImgIndex = signal(0);

  toggleShowAll() {
    this.showAll.update(val => !val);
  }

  openGallery(client: any) {
    this.selectedClient.set(client);
    this.currentImgIndex.set(0);
    document.body.style.overflow = 'hidden'; 
  }

  closeGallery() {
    this.selectedClient.set(null);
    document.body.style.overflow = 'auto'; 
  }

  nextImage(event: Event) {
    event.stopPropagation(); 
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