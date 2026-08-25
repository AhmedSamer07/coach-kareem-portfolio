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
      id: '1-month',
      title: '1 Month - شهر',
      price: '800',
      duration: '/ 1 month',
      features: [
        'دايت بلان',
        'جدول تمرين مناسب لهدفك',
        'شيت لتسجيل الاوزان',
        'متابعة يومية واتساب',
        'فيديوهات تمرين',
        'بدائل الوجبات',
        'متابعة عاداتك اليومية'
      ]
    },
    {
      id: '3-months',
      title: '3 Months - ٣ شهور',
      price: '2000',
      duration: '/ 3 months',
      isPopular: true, // Highlights this as the best deal
      features: [
        'دايت بلان',
        'جدول تمرين مناسب لهدفك',
        'شيت لتسجيل الاوزان',
        'متابعة يومية واتساب',
        'فيديوهات تمرين',
        'بدائل الوجبات',
        'متابعة عاداتك اليومية'
      ]
    },
    {
      id: '6-months',
      title: '6 Months - ٦ شهور',
      price: '3600',
      duration: '/ 6 months',
      features: [
        'دايت بلان',
        'جدول تمرين مناسب لهدفك',
        'شيت لتسجيل الاوزان',
        'متابعة يومية واتساب',
        'فيديوهات تمرين',
        'بدائل الوجبات',
        'متابعة عاداتك اليومية'
      ]
    },
    {
      id: '12-months',
      title: '12 Months - سنة',
      price: '7000',
      duration: '/ 1 year',
      features: [
        'دايت بلان',
        'جدول تمرين مناسب لهدفك',
        'شيت لتسجيل الاوزان',
        'متابعة يومية واتساب',
        'فيديوهات تمرين',
        'بدائل الوجبات',
        'متابعة عاداتك اليومية'
      ]
    }
  ];
}