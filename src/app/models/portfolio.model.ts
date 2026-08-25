export interface Transformation {
  id: number;
  name: string;
  duration: string;
  lostWeight: string;
  beforeImg: string;
  afterImg: string;
}

export interface CoachingPackage {
  id: string;
  title: string;
  price: string;
  duration: string;
  isPopular?: boolean;
  features: string[];
}