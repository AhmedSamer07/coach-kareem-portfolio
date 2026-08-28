import { Injectable } from '@angular/core';
import { Transformation, CoachingPackage } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly transformations = [
    {
      id: 1,
      name: 'Client 1',
      duration: '45 Days',
      lostWeight: 'Muscle Gain & Fat Loss',
      // We changed "image:" to "images:" and put them inside brackets []
      images: ['assets/trans1.png', 'assets/trans2.png', 'assets/trans3.png',, 'assets/trans4.png', 'assets/trans5.png'] 
    },
    {
      id: 2,
      name: 'Client 2',
      duration: '30 Days',
      lostWeight: 'Muscle Gain & Fat Loss',
      images: ['assets/trans21.png', 'assets/trans22.png', 'assets/trans23.png']
    },
    {
      id: 3,
      name: 'Client 3',
      duration: '45 Days',
      lostWeight: 'Muscle Gain & Fat Loss',
      images: ['assets/trans24.png']
    },
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