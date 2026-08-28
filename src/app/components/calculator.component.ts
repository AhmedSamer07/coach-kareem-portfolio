import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="calculator" class="py-20 bg-brand-darkest text-white border-t border-brand-dark">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-extrabold mb-2">Free Daily Calorie Target Estimator</h3>
          <p class="text-brand-light/70 text-sm">Find your maintenance calorie baseline in seconds.</p>
        </div>

        <div class="bg-brand-dark border border-brand-primary/30 rounded-2xl p-6 sm:p-8 grid md:grid-cols-2 gap-8 items-center shadow-[0_0_30px_rgba(80,200,120,0.1)]">
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-semibold uppercase text-brand-light/70 mb-1">Gender</label>
              <select [(ngModel)]="gender" class="w-full bg-brand-darkest border border-brand-primary/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-primary transition">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold uppercase text-brand-light/70 mb-1">Weight (kg)</label>
                <input type="number" [(ngModel)]="weight" class="w-full bg-brand-darkest border border-brand-primary/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-primary transition" />
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase text-brand-light/70 mb-1">Height (cm)</label>
                <input type="number" [(ngModel)]="height" class="w-full bg-brand-darkest border border-brand-primary/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-primary transition" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase text-brand-light/70 mb-1">Age</label>
              <input type="number" [(ngModel)]="age" class="w-full bg-brand-darkest border border-brand-primary/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-primary transition" />
            </div>

            <button (click)="calculateCalories()" class="w-full bg-brand-primary text-brand-darkest font-bold py-3 rounded-lg hover:brightness-110 transition mt-2 shadow-[0_0_15px_rgba(80,200,120,0.3)]">
              Calculate Target
            </button>
          </div>

          <div class="bg-brand-darkest/60 border border-brand-primary/20 rounded-xl p-6 text-center">
            <p class="text-xs uppercase text-brand-light/60 font-semibold mb-2">Estimated Daily Maintenance</p>
            <p class="text-5xl font-black text-brand-primary my-3">{{ caloriesResult() || '---' }} <span class="text-lg text-brand-light/60 font-normal">kcal</span></p>
            <p class="text-xs text-brand-light/70 leading-relaxed">
              Want a customized deficit or surplus tailored to your lean body mass? Choose a coaching plan above!
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CalculatorComponent {
  gender = 'male';
  weight = 80;
  height = 180;
  age = 25;
  caloriesResult = signal<number | null>(null);

  calculateCalories() {
    // Mifflin-St Jeor Formula
    let bmr = (10 * this.weight) + (6.25 * this.height) - (5 * this.age);
    bmr += this.gender === 'male' ? 5 : -161;
    // Assume moderate activity (1.4 multiplier)
    this.caloriesResult.set(Math.round(bmr * 1.4));
  }
}