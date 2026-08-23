import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { TransformationsComponent } from './components/transformations.component';
import { PackagesComponent } from './components/packages.component';
import { CalculatorComponent } from './components/calculator.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    TransformationsComponent,
    PackagesComponent,
    CalculatorComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-slate-900 font-sans selection:bg-brand-ice selection:text-slate-950">
      <app-navbar />
      <main>
        <app-hero />
        <app-transformations />
        <app-packages />
        <app-calculator />
      </main>
      <app-footer />
    </div>
  `
})
export class AppComponent {}