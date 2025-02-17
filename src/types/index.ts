export type ContentType = 'video' | 'image' | 'none';

export interface OnboardingStep {
  id: string;
  section: string;
  title: string;
  description: string;
  contentType: ContentType;
  content: string;
  actionLabel: string;
  backgroundColor: string;
  faq: boolean;
}