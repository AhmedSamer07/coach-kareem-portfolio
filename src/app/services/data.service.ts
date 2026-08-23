import { Injectable } from '@angular/core';
import { Transformation, CoachingPackage } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly transformations: Transformation[] = [
    {
      id: 1,
      name: "Ahmed M.",
      duration: "12 Weeks",
      lostWeight: "-14 kg Fat",
      beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&auto=format&fit=crop&q=60",
      afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      name: "Omar S.",
      duration: "16 Weeks",
      lostWeight: "+6 kg Muscle",
      beforeImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60",
      afterImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      name: "Youssef K.",
      duration: "8 Weeks",
      lostWeight: "-9 kg Fat",
      beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=60",
      afterImg: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      name: "Tarek N.",
      duration: "24 Weeks",
      lostWeight: "-22 kg Body Fat",
      beforeImg: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=500&auto=format&fit=crop&q=60",
      afterImg: "https://images.unsplash.com/photo-1549476464-37392f717541?w=500&auto=format&fit=crop&q=60"
    }
  ];

  readonly packages: CoachingPackage[] = [
    {
      id: 'weekly',
      title: 'Weekly Kickstart',
      price: '$45',
      duration: '/ week',
      features: [
        'Custom 7-day meal plan',
        'Tailored workout split',
        'Form check via video',
        '1 Check-in call'
      ]
    },
    {
      id: 'half-month',
      title: '15-Day Shred Protocol',
      price: '$85',
      duration: '/ 15 days',
      isPopular: true,
      features: [
        'Dynamic macro & nutrition plan',
        'Personalized gym & home split',
        'Weekly form check review',
        'WhatsApp direct messaging',
        'Cardio & recovery guide'
      ]
    },
    {
      id: 'monthly',
      title: 'Monthly Total Transformation',
      price: '$150',
      duration: '/ month',
      features: [
        'Full 30-day adaptive diet & gym blueprint',
        'Supplement recommendation stack',
        '24/7 VIP WhatsApp support',
        '4 In-depth video check-ins',
        'Access to private workout library'
      ]
    }
  ];
}