export interface Lawyer {
  id: string;
  name: string;
  role: string;
  oab: string;
  description: string;
  imageUrl: string;
  imagePosition?: string;
  specialties: string[];
  education: string[];
  bio: string;
  email: string;
}

export interface PracticeArea {
  id: string;
  iconName: string;
  title: string;
  description: string;
  longDescription: string;
  examples: string[];
}

export interface JuridicalTese {
  id: string;
  category: string;
  title: string;
  description: string;
  details: string;
  status: string;
  practiceAreaId?: string;
}

export interface ConsultationForm {
  fullName: string;
  phone: string;
  email: string;
  area: string;
  location: string;
  lawyerPreference: string;
  description: string;
  lgpdAccepted: boolean;
}

export interface InteractiveRecoveryState {
  platform: string;
  cause: string;
  duration: string;
  hasBackups: boolean;
  businessAccount: boolean;
}

export interface ServidorVerificationState {
  sphere: string; // 'federal' | 'state' | 'municipal'
  benefitType: string;
  yearsOfService: number;
  hasParity: boolean;
  salaryGapStatus: string;
}
